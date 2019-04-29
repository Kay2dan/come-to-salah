import React, { Component } from "react";
import Kute from "kute.js";
import "kute.js/kute-svg";

class SVGIllustration extends Component {
  render() {
    const { currentStep, data } = this.props;
    const { stances } = data;
    //FIXME: refactor following line once we have
    // svg illustrations for all the poses
    const paths = stances[currentStep]
      ? stances[currentStep]["paths"]
      : undefined;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7000 11000"
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
          duration: 1000,
          morphPrecision: 250,
          morphIndex: 70,
          // start: () => console.log("start of animation"),
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
