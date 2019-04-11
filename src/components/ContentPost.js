import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "bloomer";

/**
 *
 *          This func calls the DomContent func below to parse
 *          the html & the content within, & returns the
 *          structure within its own wrapper element tags.
 *          @param {data} container obj for all content for page
 */
const ContentPost = ({ data }) => (
  <section>
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
  </section>
);

/**
 *
 *          This func checks the `eleType` prop within the `contentObj`
 *          & returns the DOM element tag along with the content within.
 *          @param {contentObj} container of the para within the content
 *
 */
const DomContent = ({ contentObj }) => {
  const { id, classes, eleType, txt } = contentObj;
  let DomContent;
  switch (eleType) {
    case "p":
      DomContent = (
        <div id={id} className={classes}>
          {txt.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </div>
      );
      return DomContent;

    case "quote":
      DomContent = (
        <div id={id}>
          {txt.map((para, j) => (
            <blockquote className={classes} key={j}>
              {para}
            </blockquote>
          ))}
        </div>
      );
      return DomContent;

    default: {
      DomContent = <div>Unexpected EleType encountered!</div>;
    }
  }
  return DomContent;
};

ContentPost.propTypes = {
  data: PropTypes.object.isRequired,
};

DomContent.propTypes = {
  contentObj: PropTypes.object.isRequired,
};

export default ContentPost;
