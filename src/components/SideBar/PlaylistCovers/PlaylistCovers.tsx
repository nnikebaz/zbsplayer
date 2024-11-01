import React, { useEffect, useState } from "react";
import "./PlaylistCovers.scss";
import 'simplebar-react/dist/simplebar.min.css'
import './simpleBarCustom.scss'

import FavButton from "./FavButton/FavButton";
import Cover from "./Cover/Cover";
import SimpleBar from "simplebar-react";

const PlaylistCovers: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleMouseEnter = () => {
    setShowScroll(true);
  };

  const handleMouseLeave = () => {
    setShowScroll(false);
  };

  // useEffect(() => {
  //   const playlistCovers: Element | null =
  //     document.querySelector(".PlaylistCovers");
  //   const showScrollClass = "showScroll";
  //   if (playlistCovers) {
  //     if (showScroll) {
  //       playlistCovers?.classList.add(showScrollClass);
  //     } else {
  //       playlistCovers?.classList.remove(showScrollClass);
  //     }
  //   }
  // }, [showScroll]);

  return (
    <SimpleBar style={{height: '71vh', width: '100%'}} scrollbarMaxSize={100}>
      <div
        className="PlaylistCovers"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FavButton />
        <div className="PlaylistCovers__wrapper">
          <Cover />
        </div>
      </div>
    </SimpleBar>
  );
};

export default PlaylistCovers;
