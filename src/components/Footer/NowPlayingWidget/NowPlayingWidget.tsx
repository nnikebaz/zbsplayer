import React, { FC } from "react";
import './NowPlayingWidget.scss'
import { trackData } from "../../../data";

const NowPlayingWidget: React.FC = () => {
  return (
    trackData.map((track) => track.playing ?
      <div className="NowPlayingWidget">
      <img className="NowPlayingWidget__img" src={track.img.url}/>
      <div className="NowPlayingWidget__text-wrapper">
        <div className="NowPlayingWidget__song-name">{track.songName}</div>
        <div className="NowPlayingWidget__artist-name">{track.artistName}</div>
      </div>
      <svg className="NowPlayingWidget__addToFavIcon"></svg>
    </div>
    : '')
  )
}

export default NowPlayingWidget;