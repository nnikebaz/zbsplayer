import React, { RefObject, useRef } from "react";
import "./SliderButtons.scss";

interface SliderButtonsProps {
  scrollRef: React.RefObject<HTMLDivElement>,
}

const SliderButtons: React.FC<SliderButtonsProps> = ({scrollRef}) => {
  const scrollLeft = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <div className="SliderButtons" id="SliderButtons__left" onClick={scrollLeft}></div>
      <div className="SliderButtons" id="SliderButtons__right" onClick={scrollRight}></div>
    </>
  );
};

export default SliderButtons;
