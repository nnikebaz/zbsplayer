import React from "react";
import "./Navigation.scss";
import SettingsButton from "./SettingsButton/SettingsButton";
import NavigationButtons from "./NavigationButtons/NavigationButtons";

const Navigation: React.FC = () => {
  return (
    <div className="Navigation">
      <SettingsButton/>
      <NavigationButtons/>
    </div>
  );
}

export default Navigation;
