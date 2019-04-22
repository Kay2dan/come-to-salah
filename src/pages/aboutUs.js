import React from "react";
import { Container, Section } from "bloomer";
import { graphql } from "gatsby";
import TeamProfile from "../components/TeamProfile";

const AboutUs = ({ data }) => {
  const {
    allDataJson: { edges },
  } = data;
  const team = edges.filter(mom => mom.node.title === "Team Profile")[0].node;
  console.log("team: ", team.profiles);
  return (
    <div className="aboutUsPageWrapper">
      <Container>
        <h2>About 'Come To Salah'</h2>
        <Section>
          <p>Assalam U Aliekum,</p>
          <p>
            This app has been created to help learn & understand the prayers we
            pray as muslims.
          </p>
          <div className="profiles">
            {team.profiles.map((fellow, i) => {
              return <TeamProfile data={fellow} key={i} />;
            })}
          </div>
        </Section>
      </Container>
    </div>
  );
};

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          title
          profiles {
            name
            role
            link {
              type
              to
            }
            message
          }
        }
      }
    }
  }
`;

export default AboutUs;
