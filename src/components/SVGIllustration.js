import React, { Component } from "react";
import Kute from "kute.js";
// import KuteSvg from "kute.js/kute-svg";

class SVGIllustration extends Component {
  render() {
    // const {
    //   data: { stances },
    // } = this.props;
    const { currentStep, data } = this.props;
    const { stances } = data;
    const { paths } = stances[currentStep];
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7000 11000"
        className="svgIllustration"
      >
        {paths.map((path, i) => (
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
    const { prevD } = prevProps;
    const { d, pathId } = this.props;
    if (prevD !== d) {
      Kute.to(
        `#${this[pathId].current.id}`,
        { path: d },
        {
          easing: "easingCubicInOut",
          duration: 1500,
          morphIndex: 127,
        }
      ).start();
    }
  }

  render() {
    const { d, pathId } = this.props;
    return <path d={d} id={pathId} ref={this[pathId]} />;
  }
}

export default SVGIllustration;
