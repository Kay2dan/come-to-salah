import React from "react";
import { Pagination, PageControl, Page, PageList } from "bloomer";
import PropTypes from "prop-types";

const PaginationParent = ({
  currentStep,
  linkCollection,
  paginationLinkOnClickHandler,
  paginationCtrlOnClickHandler,
}) => (
  <Pagination className="is-centered" aria-label="pagination">
    {["previous", "next"].map((each, i) => (
      <PaginationControl
        direction={each}
        currentStep={currentStep}
        linkCollection={linkCollection}
        paginationCtrlOnClickHandler={paginationCtrlOnClickHandler}
        key={i}
      />
    ))}
    <PageList>
      {linkCollection.map((step, i) => {
        let str = step,
          cS = currentStep;
        // regex to add space in the string before uppercase letter
        // https://stackoverflow.com/questions/5582228/insert-space-before-capital-letters
        str = str.replace(/([A-Z])/g, " $1").trim();
        // capitalisation of the 1st word of string
        const stepStr = `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
        const classes = `pagination-link ${i === cS ? "is-current" : ""}`;
        return (
          <Page key={i}>
            <div
              className={classes}
              onClick={paginationLinkOnClickHandler}
              data-ref={step}
              aria-label={`go to step: ${stepStr}`}
            />
          </Page>
        );
      })}
    </PageList>
  </Pagination>
);

const PaginationControl = ({
  direction,
  currentStep,
  linkCollection,
  paginationCtrlOnClickHandler,
}) => {
  let disabled = false;
  let ttlSteps = linkCollection.length - 1;
  if (
    (direction === "next" && currentStep === ttlSteps) ||
    (direction !== "next" && currentStep === 0)
  ) {
    disabled = true;
  }
  return (
    <PageControl
      isNext={direction === "next"}
      className="pageControl"
      disabled={disabled}
      onClick={paginationCtrlOnClickHandler}
    />
  );
};

PaginationParent.propTypes = {
  currentStep: PropTypes.number.isRequired,
  ttlSteps: PropTypes.number.isRequired,
};

export default PaginationParent;
