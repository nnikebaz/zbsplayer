import React, { FC, useEffect, useState } from "react";
import "./ProfileButton.scss";
import { user } from "../../../../data";


const ProfileButton: React.FC = () => {

  const[monogram, setMonogram] = useState('')

  useEffect(() => {
    if (user.firstName) {
      const firstLetter = user.firstName[0].toUpperCase()
      setMonogram(firstLetter)
    }
  })

  return (
    <div className="ProfileButton">
      <div className="ProfileButton__round">
        <span className="ProfileButton__monogram">
          {monogram}
        </span>
      </div>
    </div>
  );
};

export default ProfileButton;

