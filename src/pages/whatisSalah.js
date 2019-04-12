import React from "react";
import { graphql } from "gatsby";
import { Container, Title } from "bloomer";
import Layout from "../components/layout";
import ContentSection from "../components/ContentSection";

const WhatisSalah = ({ data }) => {
  const { id, sections, title } = data.allDataJson.edges[0].node;
  console.log("id, sec, title", id, sections, title);
  return (
    <Layout>
      <Container className="">
        <Title isSize={2} id={id}>
          {title}
        </Title>
        <ContentSection data={sections} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allDataJson(filter: { title: { eq: "What Is Salaat" } }) {
      edges {
        node {
          id
          title
          sections {
            heading
            id
            content {
              id
              classes
              eleType
              txt
            }
          }
        }
      }
    }
  }
`;

export default WhatisSalah;
