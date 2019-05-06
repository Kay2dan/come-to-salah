import React from "react";
import PropTypes from "prop-types";
import { Section, Title } from "bloomer";
import DomContent from "./DomContent";

/**
 *
 *          This func calls the DomContent func below to parse
 *          the html & the content within, & returns the
 *          structure within its own wrapper element tags.
 *          @param {data} container obj for all content for page
 */
const GuideContent = ({ data }) => (
  <Section>
    {data.map((eachSection, k) => {
      const { id, heading, content } = eachSection;
      return (
        <div key={k}>
          <Title isSize={3} id={id}>
            {heading}
          </Title>
          {content.map((contentObj, i) => (
            <DomContent contentObj={contentObj} key={i} />
          ))}
        </div>
      );
    })}
  </Section>
);

GuideContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GuideContent;
