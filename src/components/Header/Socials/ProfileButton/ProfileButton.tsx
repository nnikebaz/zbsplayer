import React, { FC } from "react";
import "./ProfileButton.scss";

const ProfileButton: React.FC = () => {
  return (
    <div className="ProfileButton">
      <div className="ProfileButton__round">
        <span className="ProfileButton__monogram">
          N
        </span>
      </div>
    </div>
  );
};

export default ProfileButton;

