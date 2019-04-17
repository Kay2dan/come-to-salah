import React, { Component } from "react";
import { graphql, navigate } from "gatsby";
import { Title } from "bloomer";
import Layout from "../components/layout";
import PraySalahContent from "../components/PraySalahContent";
import StepControls from "../components/StepControls";
import "../styles/howToPraySalah.sass";

class HowToPraySalah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: "a01",
      ttlSteps: 0,
    };
  }

  // componentDidMount() {
  //   const { edges } = this.props.data.allDataJson;
  //   const { navigateTo } = this.props.location.state;
  //   const prayerNode = edges.find(
  //     node => node.title === "How To Pray Each Salah"
  //   );
  //   const prayer = prayerNode.find(
  //     aPrayer => aPrayer.heading.split(",")[0] === navigateTo
  //   );
  //   console.log("pp: ", prayerNode, prayer);
  //   // this.setState({
  //   //   ttlSteps:
  //   // })
  // }

  render() {
    const { navigateTo } = this.props.location.state;
    const { edges } = this.props.data.allDataJson;
    let recitations, prayer, steps, title;
    console.log("edges: ", edges);
    edges.forEach(obj => {
      const { node } = obj;
      switch (node.title) {
        case "Salah Steps":
          steps = node.steps;
          break;
        case "How To Pray Each Salah":
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
    const { currentStep } = this.state;
    let currentStepTxt;
    for (const step of stepSequence) {
      if (step === currentStep) {
        currentStepTxt = steps[currentStep];
        break;
      }
    }
    console.log("currentStepTxt", currentStepTxt);
    return (
      <Layout>
        <Title size={2}>{title}</Title>
        <div className="level">
          {rakaats.map((prayer, i) => (
            <div className="level-item has-text-centered" key={i}>
              <p className="heading">{prayer.type}</p>
              <p className="title">{prayer.offering}</p>
            </div>
          ))}
        </div>
        <PraySalahContent
          heading={heading}
          recitations={recitations}
          currentStepTxt={currentStepTxt}
        />
        <StepControls />
      </Layout>
    );
  }
}

// TODO: Convert repeat code to graphql fragments
export const query = graphql`
  {
    allDataJson(
      filter: {
        title: {
          in: ["How To Pray Each Salah", "Salaat Recitation", "Salah Steps"]
        }
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
