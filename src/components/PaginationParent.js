import React from "react";
// import { Link } from "gatsby";
import { Pagination, PageControl, Page, PageList } from "bloomer";
import PropTypes from "prop-types";

// const SalahPagination = ({
const PaginationParent = ({
  currentStep,
  // ttlSteps,
  linkCollection,
  paginationLinkOnClickHandler,
  paginationCtrlOnClickHandler,
}) => {
  // use of for-loop because ttlSteps is an 'int', not array
  // let pages = [];
  // for (let i = 0; i <= ttlSteps; i++) {
  //   pages.push(
  //     <Page key={i}>
  //       <PageLink isCurrent={i === currentStep} />
  //     </Page>
  //   );
  // }
  return (
    <Pagination className="is-centered" aria-label="pagination">
      {["previous", "next"].map((each, i) => (
        <PaginationControl
          direction={each}
          currentStep={currentStep}
          // ttlSteps={ttlSteps}
          linkCollection={linkCollection}
          paginationCtrlOnClickHandler={paginationCtrlOnClickHandler}
          key={i}
        />
      ))}
      {/* <PageList>{pages}</PageList> */}
      <PageList>
        {linkCollection.map((step, i) => {
          let str = step;
          // regex to split the string before uppercase letter
          // https://stackoverflow.com/questions/5582228/insert-space-before-capital-letters
          str = str.replace(/([A-Z])/g, " $1").trim();
          const stepStr = `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
          return (
            <Page key={i}>
              {/* <PageLink isCurrent={i === currentStep}> */}
              {/* <Link to={`/${step}`} /> */}
              <div
                className={`pagination-link ${
                  i === currentStep ? "is-current" : ""
                }`}
                onClick={paginationLinkOnClickHandler}
                data-ref={step}
                aria-label={`go to step: ${stepStr}`}
              />
              {/* </PageLink> */}
            </Page>
          );
        })}
      </PageList>
    </Pagination>
  );
};

const PaginationControl = ({
  direction,
  currentStep,
  // ttlSteps,
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
