import React, { Component } from "react";
import PropTypes from "prop-types";
import Kute from "kute.js";
import "kute.js/kute-svg";

class SVGIllustration extends Component {
  render() {
    const { currentStepId, data } = this.props;
    const { stances } = data;
    console.log("stances:", stances);
    console.log("currentStepId:", currentStepId);
    let paths;
    switch (currentStepId) {
      case "openingHamd":
      case "fatiha":
      case "recitationOfPassageFromTheQuran":
        paths = stances.find(o => o.id === "openingHamd").paths;
        console.log("paths: ", paths);
        break;
      default:
        paths = stances.find(o => o.id === currentStepId).paths;
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 590 1000"
        className="svgIllustration"
      >
        {paths &&
          paths.map((path, i) => (
            <Path d={path.d} pathId={path.pathId} key={i} />
          ))}
      </svg>
    );
  }
}

class Path extends Component {
  constructor(props) {
    super(props);
    const { pathId } = props;
    this[pathId] = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { d: prevD } = prevProps;
    const { d, pathId } = this.props;
    if (prevD !== d) {
      Kute.fromTo(
        this[pathId].current,
        {
          path: prevD,
        },
        {
          path: d,
        },
        {
          duration: 250,
          morphPrecision: 50,
          morphIndex: 10,
          // start: () => console.log(prevD, "___ --- ___", d),
        }
      ).start();
    }
  }

  render() {
    const { d, pathId } = this.props;
    return <path d={d} id={pathId} ref={this[pathId]} />;
  }
}

SVGIllustration.propTypes = {
  data: PropTypes.string.isRequired,
  currentStep: PropTypes.object.isRequired,
};

Path.propTypes = {
  d: PropTypes.string.isRequired,
  pathId: PropTypes.string.isRequired,
};

export default SVGIllustration;
