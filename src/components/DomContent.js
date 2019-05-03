import React from "react";
import PropTypes from "prop-types";
import { Subtitle } from "bloomer";
import RecitationSection from "./RecitationSection";

/**
 *
 *          This func checks the `eleType` prop within the `contentObj`
 *          & returns the DOM element tag along with the content within.
 *          @param {contentObj} container of the para within the content
 *
 */
const DomContent = ({ contentObj, recitations }) => {
  const { id, classes, eleType, insertion, txt } = contentObj;
  // FIXME : recitationId is an array, we should loop to get all
  // recitations for insertion
  const { location: recitationLocation, recitationId = [] } = insertion;
  let recitationRender;
  let markup;
  if (recitationLocation === "before" || recitationLocation === "after") {
    recitationRender = (
      <RecitationSection
        recitationId={recitationId}
        recitations={recitations}
      />
    );
  }
  switch (eleType) {
    case "h4":
      markup = (
        <>
          {recitationLocation === "before" ? recitationRender : undefined}
          {txt.map((val, j) => (
            <h4
              id={id ? id : undefined}
              className={classes ? classes : undefined}
              key={j}
            >
              {val}
            </h4>
          ))}
          {recitationLocation === "after" ? recitationRender : undefined}
        </>
      );
      break;

    case "h5":
      markup = (
        <>
          {recitationLocation === "before" ? recitationRender : undefined}
          {txt.map((val, j) => (
            <Subtitle
              id={id ? id : undefined}
              className={classes ? classes : undefined}
              key={j}
            >
              {val}
            </Subtitle>
          ))}
          {recitationLocation === "after" ? recitationRender : undefined}
        </>
      );
      break;

    case "note":
      markup = (
        <div>
          {recitationLocation === "before" ? recitationRender : ""}

          {txt.map((val, j) =>
            j === 0 ? (
              <h5 id={id ? id : undefined} className="has-text-left" key={j}>
                {val}
              </h5>
            ) : (
              <p
                id={id ? id : undefined}
                className={classes ? classes : undefined}
                key={j}
              >
                {val}
              </p>
            )
          )}
          {recitationLocation === "after" ? recitationRender : ""}
        </div>
      );
      break;

    case "ol":
      markup = (
        <ol id={id ? id : undefined}>
          {recitationLocation === "before" ? recitationRender : ""}
          {txt.map((val, j) => (
            <li className={classes ? classes : undefined} key={j}>
              {val}
            </li>
          ))}
          {recitationLocation === "after" ? recitationRender : ""}
        </ol>
      );
      break;

    case "p":
      markup = (
        <div id={id ? id : undefined} className={classes ? classes : undefined}>
          {recitationLocation === "before" ? recitationRender : ""}

          {txt.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
          {recitationLocation === "after" ? recitationRender : ""}
        </div>
      );
      break;

    case "quote":
      markup = (
        <div id={id ? id : undefined}>
          {recitationLocation === "before" ? recitationRender : ""}
          {txt.map((para, j) => (
            <blockquote className={classes ? classes : undefined} key={j}>
              {para}
            </blockquote>
          ))}
          {recitationLocation === "after" ? recitationRender : ""}
        </div>
      );
      break;

    default: {
      markup = <></>;
    }
  }
  return markup;
};

DomContent.propTypes = {
  contentObj: PropTypes.object.isRequired,
  recitations: PropTypes.array.isRequired,
};

export default DomContent;
