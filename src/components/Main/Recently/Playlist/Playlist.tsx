import React, { useState } from "react";
import "./Playlist.scss";
import { albums } from "../../../../data";

const Playlist:React.FC = () => {

  const limitedAlbums = albums.slice(0,8)

  return (
    <>
      {limitedAlbums.map((album) => (
        <div className="Playlist" key={album.id}>
          <img src={album.image.url} alt={album.image.alt} className="Playlist__img"></img>
          <div className="Playlist__name">{album.name}</div>
        </div>
      ))}
    </>
  );
}

export default Playlist;