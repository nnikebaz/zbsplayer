import React from "react";
import "./Header.scss";
import Navigation from "./Navigation/Navigation";
import FinderWidget from "./FinderWidget/FinderWidget";
import Social from "./Socials/Socials";

// interface HeaderProps {
//   children: React.ReactNode
// }

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Navigation/>
      <FinderWidget/>
      <Social/>
    </div>
  );
};

export default Header;
