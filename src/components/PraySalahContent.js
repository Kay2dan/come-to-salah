import React from "react";
import PropTypes from "prop-types";
import { Columns, Column, Title, Section } from "bloomer";
import DomContent from "./DomContent";
import Illustration from "./Illustration";

const PraySalahContent = ({ heading, recitations, currentStepTxt }) => {
  // console.log("PraySalahContent: ", heading, currentStepTxt);
  return (
    <Section>
      <Columns>
        <Column isSize="1/2">
          <Title isSize={3}>{heading}</Title>
          {currentStepTxt.content.map((txt, i) => (
            <DomContent contentObj={txt} recitations={recitations} key={i} />
          ))}
        </Column>
        <Column isSize="1/2">
          <Illustration />
        </Column>
      </Columns>
    </Section>
  );
};

PraySalahContent.propTypes = {
  // content: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  recitations: PropTypes.array.isRequired,
  currentStepTxt: PropTypes.array.isRequired,
};

export default PraySalahContent;
