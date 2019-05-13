import React from "react";
import { graphql, Link } from "gatsby";
import { PageControl, Pagination, Title } from "bloomer";
import GuideContent from "../components/GuideContent";
import "../styles/guideTemplate.sass";

const GuideTemplate = ({ data }) => {
  const { id, pagination, sections, title } = data.allDataJson.edges[0].node;
  let { previous, next } = pagination;

  return (
    <div className="salahGuideContainer">
      <Title isSize={2} id={id}>
        {title}
      </Title>
      <GuideContent data={sections} />
      <Pagination>
        <PageControl disabled={previous.length === 0 ? true : false} />
        <PageControl disabled={next.length === 0 ? true : false}>
          Next
        </PageControl>
      </Pagination>
    </div>
  );
};

export const query = graphql`
  query($heading: String!) {
    allDataJson(filter: { title: { eq: $heading } }) {
      edges {
        node {
          id
          title
          pagination {
            previous
            next
          }
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
