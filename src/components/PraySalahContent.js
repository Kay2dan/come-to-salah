import React from "react";
import PropTypes from "prop-types";
import { Columns, Column, Title, Section } from "bloomer";
import DomContent from "./DomContent";
import Illustration from "./Illustration";

const PraySalahContent = ({ heading, recitations, currentStepTxt }) => {
  return (
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
          <Illustration />
        </Column>
      </Columns>
    </Section>
  );
};

PraySalahContent.propTypes = {
  heading: PropTypes.string.isRequired,
  recitations: PropTypes.object.isRequired,
  currentStepTxt: PropTypes.object.isRequired,
};

export default PraySalahContent;
