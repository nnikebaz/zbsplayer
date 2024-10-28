import React, { useRef, useState } from "react";
import "./YourMix.scss";
import { albums } from "../../../../data";
import SliderButtons from "./SliderButtons/SliderButtons";

const YourMix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isHover, setHover] = useState(false)

  const handleOnMouseEnter = () => setHover(true);
  const handleOnMouseLeave = () => setHover(false)

  return (
    <div className="YourMix" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <SliderButtons scrollRef={scrollRef} hover={isHover}/>
      <div className="YourMix__slider" ref={scrollRef} >
        {albums.map((album) => (
          <div className="YourMix__item" key={album.id}>
            <img
              className="YourMix__img"
              src={album.image.url}
              alt={album.image.alt}
            />
            <p className="YourMix__name">{album.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourMix;
