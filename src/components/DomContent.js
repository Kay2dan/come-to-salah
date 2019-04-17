import React from "react";
import PropTypes from "prop-types";
import RecitationTable from "./RecitationTable";

/**
 *
 *          This func checks the `eleType` prop within the `contentObj`
 *          & returns the DOM element tag along with the content within.
 *          @param {contentObj} container of the para within the content
 *
 */
const DomContent = ({ contentObj, recitations }) => {
  const { id, classes, eleType, insertion, txt } = contentObj;
  const { location: recitationLocation, recitationId } = insertion;
  console.log("recitation: ", recitationLocation, recitationId);
  let recitationRender;
  let markup;
  if (recitationLocation === "before" || recitationLocation === "after") {
    recitationRender = (
      <RecitationTable recitationId={recitationId} recitations={recitations} />
    );
  }
  switch (eleType) {
    case "h4":
      markup = (
        <>
          {recitationLocation === "before" ? recitationRender : ""}
          {txt.map((val, j) => (
            <h4 id={id} className={classes} key={j}>
              {val}
            </h4>
          ))}
          {recitationLocation === "after" ? recitationRender : ""}
        </>
      );
      break;

    case "note":
      markup = (
        <>
          {recitationLocation === "before" ? recitationRender : ""}

          {txt.map((val, j) =>
            j === 0 ? (
              <h5 id={id} className={classes} key={j}>
                {val}
              </h5>
            ) : (
              <p id={id} className={classes} key={j}>
                {val}
              </p>
            )
          )}
          {recitationLocation === "after" ? recitationRender : ""}
        </>
      );
      break;

    case "ol":
      markup = (
        <ol id={id}>
          {recitationLocation === "before" ? recitationRender : ""}
          {txt.map((val, j) => (
            <li className={classes} key={j}>
              {val}
            </li>
          ))}
          {recitationLocation === "after" ? recitationRender : ""}
        </ol>
      );
      break;

    case "p":
      markup = (
        <div id={id} className={classes}>
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
        <div id={id}>
          {recitationLocation === "before" ? recitationRender : ""}
          {txt.map((para, j) => (
            <blockquote className={classes} key={j}>
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
  recitations: PropTypes.object.isRequired,
};

export default DomContent;
