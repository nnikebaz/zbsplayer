import React from "react";
import './FinderWidget.scss'
import HomeButton from "./HomeButton/HomeButton";
import FinderBulb from "./FinderBulb/FinderBulb";

const FinderWidget: React.FC = () => {
  return (
    <div className="FinderWidget">
      <HomeButton/>
      <FinderBulb/>
    </div>
  )
}

export default FinderWidget;