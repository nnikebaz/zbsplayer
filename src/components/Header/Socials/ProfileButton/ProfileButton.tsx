import React, { useEffect, useState } from "react";
import "./ProfileButton.scss";

const ProfileButton: React.FC = () => {
  interface User {
    firstName: string;
    surName: string
  }

  const[userData, setUserData] = useState<User | undefined>(undefined)

  useEffect(() => {
    fetch("data/user.json")
    .then((response) => response.json())
    .then((data) => setUserData(data))
    .catch((error) => console.log("Ошибка при загрузке данных", error))
  }, [])

  const monogram = userData?.firstName ? userData?.firstName[0].toUpperCase() : ''

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

