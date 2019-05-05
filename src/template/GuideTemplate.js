import React from "react";
import { graphql } from "gatsby";
import { Title } from "bloomer";
import GuideContent from "../components/GuideContent";
import "../styles/guideTemplate.sass";

const GuideTemplate = ({ data }) => {
  const { id, sections, title } = data.allDataJson.edges[0].node;
  return (
    <div className="salahGuideContainer">
      <Title isSize={2} id={id}>
        {title}
      </Title>
      <GuideContent data={sections} />
    </div>
  );
};

export const query = graphql`
  query($heading: String!) {
    allDataJson(filter: { title: { eq: $heading } }) {
      edges {
        node {
          title
          sections {
            id
            heading
            content {
              id
              classes
              eleType
              insertion {
                location
              }
              txt
            }
          }
        }
      }
    }
  }
`;

export default GuideTemplate;
