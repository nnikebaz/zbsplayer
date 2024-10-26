import React, { useState } from "react";
import "./SliderButtons.scss";

interface SliderButtonsProps {
  scrollRef: React.RefObject<HTMLDivElement>
  visible: boolean,
}

const SliderButtons: React.FC<SliderButtonsProps> = ({scrollRef, visible}) => {


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
      <div className={'SliderButtons' + (visible ? ' SliderButtons__visible' : '')} id="SliderButtons__left" onClick={scrollLeft}></div>
      <div className={'SliderButtons' + (visible ? ' SliderButtons__visible' : '')} id="SliderButtons__right" onClick={scrollRight}></div>
    </>
  );
};

export default SliderButtons;
