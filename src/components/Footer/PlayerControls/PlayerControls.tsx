import React, { FC } from "react";
import "./PlayerControls.scss";
import GeneralControls from "./GeneralControls/GeneralControls";
import ProgressWidget from "./ProgressWidget/ProgressWidget";

const PlayerControls: React.FC = () => {
  return <div className="PlayerControls">
    PlayerControls
    <GeneralControls/>
    <ProgressWidget/>
    </div>;
};

export default PlayerControls;
