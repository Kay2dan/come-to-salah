import React from "react";
import PropTypes from "prop-types";
import { Section } from "bloomer";
import { graphql } from "gatsby";
import TeamProfile from "../components/TeamProfile";
import "../styles/aboutUs.sass";

const AboutUs = ({ data }) => {
  const {
    allDataJson: { edges },
  } = data;
  const team = edges.filter(mom => mom.node.title === "Team Profile")[0].node;
  return (
    <div className="aboutUsPageWrapper">
      <div className="contentContainer">
        <Section>
          <div className="intro">
            <p>Assalam U Aliekum,</p>
            <p>
              Like most things in life, this understand is a result of efforts
              of many individuals from different walks of life & geographies.
              And as with most things in life, this is a work in progress, we
              will continue our efforts to improve & create an application that
              is genuinely helpful to you & ourselves. With duas.
            </p>
          </div>
          <div className="profiles">
            {team.profiles.map((fellow, i) => (
              <TeamProfile data={fellow} key={i} />
            ))}
          </div>
        </Section>
      </div>
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

AboutUs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutUs;
