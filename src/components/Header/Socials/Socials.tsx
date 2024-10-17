import React from "react";
import './Socials.scss'
import CowbellIcon from "./CowbellIcon/CowbellIcon";
import ProfileButton from "./ProfileButton/ProfileButton";

const Social: React.FC = () => {
  return (
    <div className="Socials">
      <CowbellIcon/>
      <ProfileButton/>
    </div>
  )
}

export default Social