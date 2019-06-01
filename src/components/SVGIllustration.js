import React, { Component } from "react";
import PropTypes from "prop-types";
import Kute from "kute.js";
import "kute.js/kute-svg";

class SVGIllustration extends Component {
  render() {
    const { currentStepId, data } = this.props;
    const { stances } = data;
    let paths;
    let svgIdToRender;
    switch (currentStepId) {
      case "openingHamd":
      case "fatiha":
      case "recitationOfPassageFromTheQuran":
        svgIdToRender = "openingHamd";
        break;
      case "qaumah":
        svgIdToRender = "standingForNiyyah";
        break;
      case "jalsah":
      case "endOfFirstRakaat":
      case "atTashahudEnd":
        svgIdToRender = "jalsah";
        break;
      default:
        svgIdToRender = currentStepId;
    }
    paths = stances.find(o => o.id === svgIdToRender).paths;
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
    const paddingTopStyle =
      pathId === "paddingTop" ? { fill: "rgba(0,0,0,0)" } : {};
    return (
      <path d={d} id={pathId} ref={this[pathId]} style={paddingTopStyle} />
    );
  }
}

SVGIllustration.propTypes = {
  data: PropTypes.object.isRequired,
  currentStepId: PropTypes.string.isRequired,
};

Path.propTypes = {
  d: PropTypes.string.isRequired,
  pathId: PropTypes.string.isRequired,
};

export default SVGIllustration;
