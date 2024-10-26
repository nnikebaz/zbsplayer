import React from "react";
import './Recently.scss'
import Playlist from "./Playlist/Playlist";

const Recently: React.FC = () => {
  return (
    <div className="Recently">
      <Playlist/>
    </div>
  )
}

export default Recently;