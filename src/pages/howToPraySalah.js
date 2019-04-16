import React, { Component } from "react";
import { graphql } from "gatsby";
import { Title } from "bloomer";
import Layout from "../components/layout";
import PraySalahContent from "../components/PraySalahContent";
import StepControls from "../components/StepControls";

// const HowToPraySalah = ({ data }) => {
class HowToPraySalah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: [1, 1], // 1st=major; 2nd=minor
    };
  }

  render() {
    const {
      recitations,
      sections,
      steps,
      title,
    } = this.props.data.allDataJson.edges[0].node;
    console.log("sections: ", sections);
    // const contentSections = section
    const { content, heading, rakaats } = sections[0];
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
          content={content}
          heading={heading}
          recitations={recitations}
          steps={steps}
        />
        <StepControls />
      </Layout>
    );
  }
}

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
          Steps {
            heading
            content {
              id
              classes
              eleType
              insertion {
                location
                recitationRef
              }
              txt
            }
          }
          sections {
            heading
            id
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
