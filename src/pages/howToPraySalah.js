import React, { Component } from "react";
import { graphql } from "gatsby";
import { Title } from "bloomer";
import PraySalahContent from "../components/PraySalahContent";
import SalahPagination from "../components/SalahPagination";
import "../styles/howToPraySalah.sass";

class HowToPraySalah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStepId: "standingForNiyyah",
      currentStep: 0,
      ttlSteps: 0, // counts starts at 0 so real count = ttlSteps + 1
    };
  }

  // filter data from gql by excluding null objects/ entries returned
  // by gql. Func used to extract 'salah steps', 'how to pray salah',
  // 'salah recitation' & 'title' from the gql data into the data obj.
  getEachSection = (data, navigateTo) => {
    const { edges } = data.allDataJson;
    const rtnData = {}; // recitations, prayer, steps, title
    edges.forEach(obj => {
      const { node } = obj;
      switch (node.title) {
        case "Salah Steps":
          rtnData.steps = node.steps;
          break;
        case "How To Pray Salah":
          rtnData.title = node.title;
          rtnData.prayer = node.prayers.find(
            eachPrayer => eachPrayer.heading.split(",")[0] === navigateTo
          );
          break;
        case "Salaat Recitation":
          rtnData.recitations = node.recitations;
          break;
        case "Vector Illustrations":
          rtnData.illustrations = node.illustrations;
          break;
        default:
          return;
      }
    });
    return rtnData;
  };

  // finds the obj which contains the salah steps sequence
  // based on the title of the node; Used to find the current
  // active step data to display & to update the component
  // state
  getStepSequenceFromGqlData = (data, navigateTo) => {
    const { edges } = data.allDataJson;
    const prayers = edges.find(
      nodes => nodes.node.title === "How To Pray Salah"
    ).node.prayers;
    return prayers.find(each => each.heading.split(",")[0] === navigateTo)
      .stepSequenceIds;
  };

  componentDidMount() {
    const { data, location } = this.props;
    const navigateTo = location.state ? location.state.navigateTo : "Fajr";
    const stepSequence = this.getStepSequenceFromGqlData(data, navigateTo);
    this.setState({
      ttlSteps: stepSequence.length - 1,
    });
  }

  paginationOnClickHandler = ev => {
    let evTarget = ev.target;
    const { data, location } = this.props;
    const navigateTo = location.state ? location.state.navigateTo : "Fajr";
    if (!evTarget.hasAttribute("disabled")) {
      const btnType = evTarget.classList.contains("pagination-next");
      let { currentStep } = this.state;
      let newStepVal = btnType ? currentStep + 1 : currentStep - 1;
      const stepSequence = this.getStepSequenceFromGqlData(data, navigateTo);
      this.setState({
        currentStep: newStepVal,
        currentStepId: stepSequence[newStepVal],
      });
    }
  };

  render() {
    const { data, location } = this.props;
    const navigateTo = location.state ? location.state.navigateTo : "Fajr";
    const { currentStep, currentStepId, ttlSteps } = this.state;
    const {
      recitations,
      prayer,
      steps,
      title,
      illustrations,
    } = this.getEachSection(data, navigateTo);
    const { heading, rakaats, stepSequenceIds } = prayer;
    let currentStepTxt;
    for (const step of stepSequenceIds) {
      if (step === currentStepId) {
        steps.forEach(entry => {
          if (entry.id === currentStepId) {
            currentStepTxt = entry;
          }
        });
      }
    }
    return (
      <div className="howToPraySalahPageWrapper">
        <div className="titleContainer">
          <Title isSize={4}>{title}</Title>
        </div>
        <div className="contentContainer">
          <div className="level rakaatsInfo">
            {rakaats.map((prayer, i) => (
              <div className="level-item has-text-centered" key={i}>
                <div className="blockContainer">
                  <p className="heading">{prayer.type}</p>
                  <p className="title is-size-2">{prayer.offering}</p>
                </div>
              </div>
            ))}
          </div>
          <PraySalahContent
            currentStepTxt={currentStepTxt}
            heading={heading}
            illustrations={illustrations}
            recitations={recitations}
          />
          <SalahPagination
            currentStep={currentStep}
            ttlSteps={ttlSteps}
            paginationOnClickHandler={this.paginationOnClickHandler}
          />
        </div>
      </div>
    );
  }
}

export const query = graphql`
  {
    allDataJson(
      filter: {
        title: {
          in: [
            "How To Pray Salah"
            "Salaat Recitation"
            "Salah Steps"
            "Vector Illustrations"
          ]
        }
      }
    ) {
      edges {
        node {
          title
          steps {
            id
            heading
            content {
              ...stepsData
            }
          }
          prayers {
            id
            heading
            stepSequenceIds
            rakaats {
              type
              offering
            }
          }
          recitations {
            ...recitationData
          }
          illustrations {
            salahType
            stances {
              ...svgIllustrationData
            }
          }
        }
      }
    }
  }
  fragment recitationData on DataJsonRecitations {
    id
    arabic
    transliteration
    translation
  }
  fragment stepsData on DataJsonStepsContent {
    id
    classes
    eleType
    txt
    insertion {
      location
      recitationId
    }
  }
  fragment svgIllustrationData on DataJsonIllustrationsStances {
    id
    name
    paths {
      pathId
      d
    }
  }
`;

export default HowToPraySalah;
