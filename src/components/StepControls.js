import React from "react";
import PropTypes from "prop-types";

const StepControls = () => {
  return (
    <div className="level stepControls">
      <div className="level-left ctrl">
        {/* add svg for left arrow here */}
      </div>
      <div className="level-right ctrl">
        {/* add svg for right arrow here; we can rotate the same arrow SVG code */}
      </div>
    </div>
  );
};

StepControls.propTypes = {
  // eventhandler for each ctrl
  // current page number
  // total pages count
};

export default StepControls;
