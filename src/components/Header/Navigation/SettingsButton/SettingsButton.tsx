import React, { FC } from "react";
import "./SettingsButton.scss";

const SettingsButton: React.FC = () => {
  return (
    <div className="SettingsButton">
      <svg
        className="SettingsButton__item"
        width="101"
        height="20"
        viewBox="0 0 101 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <circle cx="50.4885" cy="10" r="10" />
      <circle cx="90.4885" cy="10" r="10" />
      <circle cx="10.4885" cy="10" r="10" />
      </svg>
    </div>
  );
};

export default SettingsButton;
