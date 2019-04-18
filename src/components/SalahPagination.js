import React from "react";
import PropTypes from "prop-types";
import { Pagination, PageControl, Page, PageLink, PageList } from "bloomer";

const SalahPagination = ({ currentStep, ttlSteps }) => {
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
      <PageControl><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.8 37.8" ><g><path d="M309.1 362.9a3.3 3.3 0 1 0-4.7 4.7l25.1 25.1h-66.7a3.3 3.3 0 0 0-3.3 3.3c0 1.8 1.5 3.3 3.3 3.3h66.7l-25.1 25.1c-.6.6-1 1.5-1 2.3 0 .9.4 1.7 1 2.3.6.6 1.5 1 2.4 1 .9 0 1.7-.4 2.4-1l30.8-30.8c.6-.6 1-1.5 1-2.4 0-.9-.4-1.7-1-2.4z"/><path d="M306 324.5a71.6 71.6 0 0 0-50.6 122 71.5 71.5 0 1 0 50.6-122zm0 136.4a65 65 0 1 1 .1-130 65 65 0 0 1-.1 130z"/></g></svg></PageControl>
      <PageControl isNext><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.8 37.8" ><g><path d="M309.1 362.9a3.3 3.3 0 1 0-4.7 4.7l25.1 25.1h-66.7a3.3 3.3 0 0 0-3.3 3.3c0 1.8 1.5 3.3 3.3 3.3h66.7l-25.1 25.1c-.6.6-1 1.5-1 2.3 0 .9.4 1.7 1 2.3.6.6 1.5 1 2.4 1 .9 0 1.7-.4 2.4-1l30.8-30.8c.6-.6 1-1.5 1-2.4 0-.9-.4-1.7-1-2.4z"/><path d="M306 324.5a71.6 71.6 0 0 0-50.6 122 71.5 71.5 0 1 0 50.6-122zm0 136.4a65 65 0 1 1 .1-130 65 65 0 0 1-.1 130z"/></g></svg></PageControl>
      <PageList>{pages}</PageList>
    </Pagination>
  );
};

SalahPagination.propTypes = {
  currentStep: PropTypes.number.isRequired,
  ttlSteps: PropTypes.number.isRequired,
};

export default SalahPagination;
