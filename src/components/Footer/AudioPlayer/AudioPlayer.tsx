import React, { useRef } from "react";
import "./AudioPlayer.scss";
import { trackData } from "../../../data";
import GeneralControls from "./GeneralControls/GeneralControls";
import ProgressWidget from "./ProgressWidget/ProgressWidget";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  
  return <div className="AudioPlayer">
    {trackData.map((track) => (
      <audio src={track.url} preload="metadata" key={track.id} className="AudioPlayer__audio" ref={audioRef}></audio>
    ))}
    <GeneralControls audioRef={audioRef}/>
    <ProgressWidget/>
    </div>;
};

export default AudioPlayer;
