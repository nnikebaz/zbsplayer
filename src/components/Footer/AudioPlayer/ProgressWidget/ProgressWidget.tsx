import React from "react";
import "./ProgressWidget.scss";

const ProgressWidget: React.FC = () => {
  return <div className="ProgressWidget">
    <div className="ProgressWidget__currentTime">currentTime</div>

    <div className="ProgressWidget__totalTime">totalTime</div>
  </div>;
};

export default ProgressWidget;
