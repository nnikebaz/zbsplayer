import React from "react";
import "./PlayButton.scss";
import "../../../../../sass/abstracts/variables.scss"

const PlayButton: React.FC = () => {
  return (
    <div className="PlayButton">
      <svg
        width="101"
        height="101"
        viewBox="0 0 101 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="PlayButton__icon"
      >
        <circle cx="50.1423" cy="50.6927" r="50" />
        <path
          d="M67.8894 49.8267C68.5561 50.2116 68.5561 51.1739 67.8894 51.5588L39.6985 67.8348C39.0318 68.2197 38.1985 67.7386 38.1985 66.9688L38.1985 34.4167C38.1985 33.6469 39.0318 33.1658 39.6985 33.5507L67.8894 49.8267Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default PlayButton;
