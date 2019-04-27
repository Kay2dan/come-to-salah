import React from "react";
import PropTypes from "prop-types";
import { Columns, Column, Title, Section } from "bloomer";
import DomContent from "./DomContent";
import SVGIllustration from "./SVGIllustration";

const PraySalahContent = ({
  currentStep,
  currentStepTxt,
  heading,
  illustrations,
  recitations,
}) => (
  <Section>
    <Columns>
      <Column isSize="1/2" className="has-text-right">
        <div className="contentVerticalCentre">
          <Title className="is-size-3 has-text-centered">{heading}</Title>
          {currentStepTxt.content.map((txt, i) => (
            <DomContent contentObj={txt} recitations={recitations} key={i} />
          ))}
        </div>
      </Column>
      <Column isSize="1/2">
        <SVGIllustration data={illustrations} currentStep={currentStep} />
      </Column>
    </Columns>
  </Section>
);

PraySalahContent.propTypes = {
  heading: PropTypes.string.isRequired,
  recitations: PropTypes.array.isRequired,
  currentStepTxt: PropTypes.object.isRequired,
};

export default PraySalahContent;
