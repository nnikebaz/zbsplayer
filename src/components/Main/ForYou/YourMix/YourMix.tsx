import React, { useRef, useState } from "react";
import "./YourMix.scss";
import { albums } from "../../../../data";
import SliderButtons from "./SliderButtons/SliderButtons";
import PlayButton from "./PlayButton/PlayButton";

const YourMix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isHover, setHover] = useState(false);

  const handleOnMouseEnter = () => setHover(true);
  const handleOnMouseLeave = () => setHover(false);

  return (
    <div
      className="YourMix"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <SliderButtons scrollRef={scrollRef} hover={isHover} />
      <div className="YourMix__slider" ref={scrollRef}>
        {albums.map((album) => (
          <div className="YourMix__item" key={album.id}>
            <div className="YourMix__img-wrapper">
              <img
                className="YourMix__img"
                src={album.image.url}
                alt={album.image.alt}
              />
              <PlayButton />
            </div>
            <p className="YourMix__name">{album.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourMix;
