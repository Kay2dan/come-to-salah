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
  rakaats,
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
        <div className="level rakaatsInfo">
          <Title className="is-size-6">Rakaats:</Title>
          {rakaats.map((prayer, i) => (
            <div className="level-item has-text-centered" key={i}>
              <div className="blockContainer">
                <p className="heading">{prayer.type}</p>
                <p className="title is-size-2">{prayer.offering}</p>
              </div>
            </div>
          ))}
        </div>

        <SVGIllustration data={illustrations} currentStep={currentStep} />
      </Column>
    </Columns>
  </Section>
);

PraySalahContent.propTypes = {
  currentStep: PropTypes.object.isRequired,
  currentStepTxt: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  illustrations: PropTypes.object.isRequired,
  rakaats: PropTypes.array.isRequired,
  recitations: PropTypes.array.isRequired,
};

export default PraySalahContent;
