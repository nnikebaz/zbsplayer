import React from "react";
import "./Footer.scss";
import NowPlayingWidget from "./NowPlayingWidget/NowPlayingWidget";
import PlayerControls from "./PlayerControls/PlayerControls";
import ControlsPanel from "./ControlsPanel/ControlsPanel";

function Footer() {
  return <div className="Footer">
    Footer
    <NowPlayingWidget/>
    <PlayerControls/>
    <ControlsPanel/>
  </div>;
}

export default Footer;
