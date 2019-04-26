import React, { Component } from "react";
import Kute from "kute.js";
import KuteSvg from "kute.js/kute-svg";

class SVGIllustration extends Component {
  // componentDidUpdate(){
  // }

  render() {
    // const {
    //   data: { stances },
    // } = this.props;
    const { data } = this.props;
    const { stances } = data;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7000 11000"
        className="svgIllustration"
      >
        {stances[0].paths.map((path, i) => (
          <path d={path.d} id={path.id} key={i} />
        ))}
      </svg>
    );
  }
}

export default SVGIllustration;
