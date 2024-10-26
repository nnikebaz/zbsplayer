import React, { useEffect, useRef } from "react";
import "./YourMix.scss";
import { albums } from "../../../../data";
import SliderButtons from "./SliderButtons/SliderButtons";

const YourMix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sliderButtonsElements = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    sliderButtonsElements.current = document.querySelectorAll('.SliderButtons');
  }, [])

  const handleOnMouseEnterVisibleButtons = ():void => {
    if (sliderButtonsElements.current) {
      sliderButtonsElements.current.forEach((button) => button.classList.add('SliderButtons__visible'))
    } else {
      console.log(`Элемент ${sliderButtonsElements.current} не найден`)
    } 
  }

  const handleOnMouseLeaveInvisibleButtons = ():void => {
    if (sliderButtonsElements.current) {
      sliderButtonsElements.current.forEach((button) => button.classList.remove('SliderButtons__visible'))
    } else {
      console.log(`Элемент ${sliderButtonsElements.current} не найден`)
    }
  }

  return (
    <div className="YourMix">
      <SliderButtons scrollRef={scrollRef}/>
      <div className="YourMix__slider" ref={scrollRef} onMouseEnter={handleOnMouseEnterVisibleButtons} onMouseLeave={handleOnMouseLeaveInvisibleButtons}>
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
