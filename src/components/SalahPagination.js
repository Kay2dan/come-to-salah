import React from "react";
import PropTypes from "prop-types";
import { Pagination, PageControl, Page, PageLink, PageList } from "bloomer";

const SalahPagination = ({
  currentStep,
  ttlSteps,
  paginationOnClickHandler,
}) => {
  // use of for-loop because ttlSteps is an 'int', not array
  let pages = [];
  for (let i = 0; i <= ttlSteps; i++) {
    pages.push(
      <Page key={i}>
        <PageLink isCurrent={i === currentStep} />
      </Page>
    );
  }
  return (
    <Pagination className="is-centered">
      {["previous", "next"].map((each, i) => (
        <PaginationControl
          direction={each}
          currentStep={currentStep}
          ttlSteps={ttlSteps}
          paginationOnClickHandler={paginationOnClickHandler}
          key={i}
        />
      ))}
      <PageList>{pages}</PageList>
    </Pagination>
  );
};

const PaginationControl = ({
  direction,
  currentStep,
  ttlSteps,
  paginationOnClickHandler,
}) => {
  let disabled = false;
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
      onClick={paginationOnClickHandler}
    />
  );
};

SalahPagination.propTypes = {
  currentStep: PropTypes.number.isRequired,
  ttlSteps: PropTypes.number.isRequired,
};

export default SalahPagination;
