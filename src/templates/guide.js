import React from "react";

const GuideTemplate = props => {
  console.log("guideTemplate props:", props);
  return (
    <div className="guideTemplate">
      {dangerouslySetTemplate({ __html: "test123" })}
    </div>
  );
};

export default GuideTemplate;
