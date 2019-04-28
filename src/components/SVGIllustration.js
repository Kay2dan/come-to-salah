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
    const { d: prevD } = prevProps;
    const { d, pathId } = this.props;
    console.log("id: : : ", `#${pathId}`, Kute.fromTo);
    var ani = Kute.fromTo(
      `#${pathId}`,
      {
        path: prevD,
      },
      {
        path: d,
      },
      {
        easing: "linear",
        duration: 2500,
        morphIndex: 137,
      }
    );
  }

  // componentDidUpdate(prevProps) {
  //   const { d: prevD } = prevProps;
  //   const { d, pathId } = this.props;
  //   if (prevD !== d) {
  //     console.log("prevD: ", prevD);
  //     console.log("d: ", d);
  //     console.log("ele: ", `#${this[pathId].current.id}`);
  //     console.log("Kute: ", Kute);
  //     Kute.to(`#${this[pathId].current.id}`, {
  //       path:
  //         "M1870.7 8115c-2.2,-3.9 -54.5,-196.6 -42.8,-55 19.6,55.7 49.8,126.9 79.4,174.6 57.7,93.4 295.6,299.1 191.1,144.7 -172.3,44.7 -232,40.2 -322.5,-7 -301.5,-141.7 -195.1,-291.2 -204.4,-536 -0.4,-10.6 -0.8,-21.2 -2.2,-29.8 -7.8,-48.8 -59.7,-20.6 -69,5.9 4.1,59.5 18.5,117 8,183.4 -2.1,222.4 -25.5,227.6 154.9,388.6 125,88.1 241.1,110.6 367.4,67.6 222.2,-80 10.8,-247.2 -76,-369.6 0.1,0 -86.1,-141.8 -94.9,-147.4z",
  //       },
  //       {
  //         easing: "easingCubicInOut",
  //         delay: 500,
  //         duration: 12500,
  //         morphIndex: 127,
  //     }).start();
  //   }
  // }

  render() {
    const { d, pathId } = this.props;
    return <path d={d} id={pathId} ref={this[pathId]} />;
  }
}

export default SVGIllustration;
