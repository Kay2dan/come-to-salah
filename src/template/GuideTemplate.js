import React from "react";
import { graphql, Link } from "gatsby";
import { PageControl, Pagination, Title } from "bloomer";
import GuideContent from "../components/GuideContent";
import "../styles/guideTemplate.sass";

const removeSpecialCharactersAndCapitaliseFirstLetter = str => {
  let newStr = str.replace(/[^\w]/g, "");
  return newStr.charAt(0).toLowerCase() + newStr.slice(1);
};

const GuideTemplate = ({ data }) => {
  const { id, pagination, sections, title } = data.allDataJson.edges[0].node;
  const { previous, next } = pagination;
  const prevLink = removeSpecialCharactersAndCapitaliseFirstLetter(previous);
  const nextLink = removeSpecialCharactersAndCapitaliseFirstLetter(next);
  return (
    <div className="salahGuideContainer">
      <Title isSize={2} id={id}>
        {title}
      </Title>
      <GuideContent data={sections} />
      <Pagination>
        <PageControl disabled={previous.length === 0 ? true : false}>
          <Link to={prevLink}>Previous</Link>
        </PageControl>
        <PageControl disabled={next.length === 0 ? true : false}>
          <Link to={nextLink}>Next</Link>
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
