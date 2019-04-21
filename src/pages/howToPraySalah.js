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
      currentStepId: "a01",
      currentStep: 0,
      ttlSteps: 0, // counts starts at 0 so real count = ttlSteps + 1
    };
  }

  componentDidMount() {
    const { edges } = this.props.data.allDataJson;
    const { navigateTo } = this.props.location.state;
    const prayers = edges.find(
      nodes => nodes.node.title === "How To Pray Salah"
    ).node.prayers;
    const stepSequence = prayers.find(
      each => each.heading.split(",")[0] === navigateTo
    ).stepSequence;
    console.log("ttlSteps: ", stepSequence.length);
    this.setState({
      ttlSteps: stepSequence.length - 1,
    });
  }

  paginationOnClickHandler = ev => {
    let evTarget = ev.target;
    // while (!evTarget.classList.contains("pageControl")) {
    //   evTarget = evTarget.parentNode;
    // }
    if (!evTarget.hasAttribute("disabled")) {
      const btnType = evTarget.classList.contains("pagination-next");
      let { currentStep } = this.state;
      let newStepVal = btnType ? currentStep + 1 : currentStep - 1;
      this.setState({
        currentStep: newStepVal,
      });
    } else {
      return false;
    }
  };

  render() {
    const { navigateTo } = this.props.location.state;
    const { edges } = this.props.data.allDataJson;
    let recitations, prayer, steps, title;
    // console.log("edges: ", edges);
    edges.forEach(obj => {
      const { node } = obj;
      switch (node.title) {
        case "Salah Steps":
          steps = node.steps;
          break;
        case "How To Pray Salah":
          title = node.title;
          prayer = node.prayers.find(
            eachPrayer => eachPrayer.heading.split(",")[0] === navigateTo
          );
          break;
        case "Salaat Recitation":
          recitations = node.recitations;
          break;
        default:
          return;
      }
    });
    const { heading, rakaats, stepSequence } = prayer;
    const { currentStep, currentStepId, ttlSteps } = this.state;
    let currentStepTxt;
    for (const step of stepSequence) {
      if (step === currentStepId) {
        currentStepTxt = steps[currentStepId];
        break;
      }
    }
    // console.log("currentStepTxt", currentStepTxt);
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
            heading={heading}
            recitations={recitations}
            currentStepTxt={currentStepTxt}
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

// TODO: Convert repeat code to graphql fragments
export const query = graphql`
  {
    allDataJson(
      filter: {
        title: { in: ["How To Pray Salah", "Salaat Recitation", "Salah Steps"] }
      }
    ) {
      edges {
        node {
          title
          steps {
            a01 {
              heading
              content {
                id
                classes
                eleType
                insertion {
                  location
                  recitationId
                }
                txt
              }
            }
          }
          prayers {
            heading
            stepSequence
            rakaats {
              type
              offering
            }
          }
          recitations {
            AllahuAkbar {
              arabic
              transliteration
              translation
            }
            Hamd1 {
              arabic
              transliteration
              translation
            }
            Hamd2 {
              arabic
              translation
              transliteration
            }
            Hamd3 {
              arabic
              translation
              transliteration
            }
            AuzoBillah {
              arabic
              translation
              transliteration
            }
            Bismillah {
              arabic
              transliteration
              translation
            }
            Fatiha {
              arabic
              transliteration
              translation
            }
            RukuuMain {
              arabic
              transliteration
              translation
            }
            RukuuSupplementary {
              arabic
              transliteration
              translation
            }
            QaumahMain {
              arabic
              transliteration
              translation
            }
            QaumahSecondary {
              arabic
              transliteration
              translation
            }
            SajdahMain {
              arabic
              transliteration
              translation
            }
            SajdahSecondary {
              arabic
              transliteration
              translation
            }
            Jalsah {
              arabic
              transliteration
              translation
            }
            TashahudStart {
              arabic
              transliteration
              translation
            }
            TashahudEnd {
              arabic
              transliteration
              translation
            }
            SalaatEnd {
              arabic
              transliteration
              translation
            }
          }
        }
      }
    }
  }
`;

export default HowToPraySalah;
