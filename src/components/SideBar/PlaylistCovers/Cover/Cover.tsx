import React from "react";
import "./Cover.scss";
import { albums } from "../../../../data";

const Cover: React.FC = () => {

  return (

    <>
      {albums.map((album) => (
        <div className="Cover" key={album.id}>
          <img
            src={album.image.url}
            alt={album.image.alt}
            className="Cover__item"
          />
        </div>
      ))}
    </>
  );
};

export default Cover;
