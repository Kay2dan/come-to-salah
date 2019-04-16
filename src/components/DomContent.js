import React from "react";
import PropTypes from "prop-types";

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
    // case "h4":
    //   DomContent = (

    //   )

    case "note":
      DomContent = (
        <h5 id={id}>
          {txt.map((val, j) => {
            if (j === 0) {
              return <></>;
            } else {
              return <p key={j}>{val}</p>;
            }
          })}
        </h5>
      );
      break;

    case "ol":
      DomContent = (
        <ol id={id}>
          {txt.map((val, j) => (
            <li className={classes} key={j}>
              {val}
            </li>
          ))}
        </ol>
      );
      break;

    case "p":
      DomContent = (
        <div id={id} className={classes}>
          {txt.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </div>
      );
      break;

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
      break;

    default: {
      DomContent = <></>;
    }
  }
  return DomContent;
};

DomContent.propTypes = {
  contentObj: PropTypes.object.isRequired,
};

export default DomContent;
