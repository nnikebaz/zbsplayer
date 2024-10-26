import React, { useEffect, useState } from "react";
import "./PlaylistCovers.scss";
import FavButton from "./FavButton/FavButton";
import Cover from "./Cover/Cover";


const PlaylistCovers: React.FC = () => {

  const[showScroll, setShowScroll] = useState(false)

  const handleMouseEnter = () => {
    setShowScroll(true)
  }
  
  const handleMouseLeave = () => {
    setShowScroll(false)
  }

  useEffect(() => {
    const playlistCovers: Element | null = document.querySelector('.PlaylistCovers')
    const showScrollClass = 'showScroll'
    if (playlistCovers) {
      if (showScroll) {
        playlistCovers?.classList.add(showScrollClass)
      } else {
        playlistCovers?.classList.remove(showScrollClass)
      }
    }

  }, [showScroll])


  return (
    <div className="PlaylistCovers"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <FavButton/>
      <div className="PlaylistCovers__wrapper">
      <Cover/>
      </div>
    </div>
  );
}

export default PlaylistCovers;
