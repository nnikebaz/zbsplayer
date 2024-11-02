import React from "react";
import "./Footer.scss";
import NowPlayingWidget from "./NowPlayingWidget/NowPlayingWidget";
import PlayerControls from "./AudioPlayer/AudioPlayer";
import ControlsPanel from "./ControlsPanel/ControlsPanel";

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <NowPlayingWidget/>
      <PlayerControls/>
      <ControlsPanel/>
  </div>
  )
}

export default Footer;
