import React from "react";
import PropTypes from "prop-types";
import { Pagination, PageControl, Page, PageLink, PageList } from "bloomer";

const SalahPagination = ({
  currentStep,
  ttlSteps,
  paginationOnClickHandler,
}) => {
  let pages = [];
  console.log("tooootleSteps: ", ttlSteps);
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
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.8 37.8">
        <path
          d="M18.14 10.12a.88.88 0 1 1 1.24 1.24L12.74 18H30.4c.48 0 .87.4.87.87 0 .48-.4.88-.87.88H12.74l6.64 6.64c.16.16.27.4.27.6 0 .24-.1.46-.27.61a.92.92 0 0 1-.63.27.98.98 0 0 1-.64-.27l-8.14-8.14a.92.92 0 0 1-.27-.64c0-.24.1-.45.27-.63z"
          fill="#0d324d"
        />
        <path
          d="M5.57 5.49a18.92 18.92 0 1 0 26.78 26.74A18.92 18.92 0 0 0 5.57 5.5zM1.8 18.87a17.2 17.2 0 1 1 34.4.03 17.2 17.2 0 0 1-34.4-.03z"
          fill="#0d324d"
        />
      </svg> */}
    </PageControl>
  );
};

SalahPagination.propTypes = {
  currentStep: PropTypes.number.isRequired,
  ttlSteps: PropTypes.number.isRequired,
};

export default SalahPagination;
