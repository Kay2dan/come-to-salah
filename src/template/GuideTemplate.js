import React from "react";
import { graphql } from "gatsby";
import { Container, Title } from "bloomer";
import Layout from "../components/layout";
import GuideContent from "../components/GuideContent";

const GuideTemplate = ({ data }) => {
  const { id, sections, title } = data.allDataJson.edges[0].node;
  return (
    <Layout>
      <Container className="">
        <Title isSize={2} id={id}>
          {title}
        </Title>
        <GuideContent data={sections} />
      </Container>
    </Layout>
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
