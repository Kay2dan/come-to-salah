import React from "react";
import PropTypes from "prop-types";

const SectionContent = ({ content = "" }) => <p>{content}</p>;

SectionContent.propTypes = {
  content: PropTypes.string,
};

export default SectionContent;
