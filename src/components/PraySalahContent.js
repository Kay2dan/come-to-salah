import React from "react";
import PropTypes from "prop-types";
import { Columns, Column, Title, Section } from "bloomer";
import DomContent from "./DomContent";

const PraySalahContent = ({
  heading,
  recitations,
  steps,
  stepSequence,
  currentStep,
}) => {
  console.log(
    "PraySalahContent: ",
    heading,
    recitations,
    steps,
    stepSequence,
    currentStep
  );
  return (
    <Section>
      <Columns>
        <Column isSize="1/2">
          <Title isSize={3}>{heading}</Title>
        </Column>
        <Column isSize="1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10000 16940">
            {/* the svg illustration paths will go here */}
          </svg>
        </Column>
      </Columns>
    </Section>
  );
};

PraySalahContent.propTypes = {
  content: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
};

export default PraySalahContent;
