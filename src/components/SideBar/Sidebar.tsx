import React from "react";
import "./Sidebar.scss";
import MusicLibraryButton from "./MusicLibraryButton/MusicLibraryButton.tsx";
import PlaylistCovers from "./PlaylistCovers/PlaylistCovers.tsx";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <MusicLibraryButton />
        <PlaylistCovers/>      </div>
    </div>
  );
}

export default Sidebar;
