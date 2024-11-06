import React from "react";
import "./PlaylistCovers.scss";
import 'simplebar-react/dist/simplebar.min.css'
import './simpleBarCustom.scss'

import FavButton from "./FavButton/FavButton";
import Cover from "./Cover/Cover";
import SimpleBar from "simplebar-react";

const PlaylistCovers: React.FC = () => {

  return (
    <SimpleBar style={{height: '71vh', width: '100%'}} scrollbarMaxSize={100}>
      <div
        className="PlaylistCovers"
      >
        <FavButton />
        <div className="PlaylistCovers__wrapper">
          <Cover />
        </div>
      </div>
    </SimpleBar>
  );
};

export default PlaylistCovers;
