import React from "react";
import { Link } from "gatsby";
import { Pagination, PageControl, Page, PageList } from "bloomer";
import PropTypes from "prop-types";

const paginationParentWithLink = ({
  currentStep,
  linkCollection,
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
    {/* <PageList>
      {linkCollection.map((step, i) => (
        <Page key={i}>
          <PageLink isCurrent={i === currentStep}>
            <Link to={`/${step}`} />
          </PageLink>
        </Page>
      ))}
    </PageList> */}
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

paginationParentWithLink.propTypes = {
  currentStep: PropTypes.number.isRequired,
  ttlSteps: PropTypes.number.isRequired,
};

export default paginationParentWithLink;
