import React from "react";
import './Sidebar.scss'
import MusicLibraryButton from "./MusicLibraryButton/MusicLibraryButton.tsx";
import PlaylistCovers from "./PlaylistCovers/PlaylistCovers.tsx";

function Sidebar() {
  return (
    <div className="sidebar">
      Sidebar
      <MusicLibraryButton/>
      <PlaylistCovers />
    </div>
  )
}

export default Sidebar;