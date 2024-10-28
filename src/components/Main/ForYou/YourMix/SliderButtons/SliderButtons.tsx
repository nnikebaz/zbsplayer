import React, { useEffect, useState } from "react";
import "./SliderButtons.scss";

interface SliderButtonsProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  hover: boolean;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ scrollRef, hover }) => {

  const yourMixItemWidth: number | undefined = document.querySelector('.YourMix__item')?.clientWidth
  const sliderStep: number = yourMixItemWidth ? yourMixItemWidth * 2.5 : 0

  useEffect(() => {
    
    const leftButtonElement: HTMLElement | null = document.getElementById("sliderButtons__left");
    const rightButtonElement: HTMLElement | null = document.getElementById("sliderButtons__right");

    const buttonsAnimations = (buttonElement: HTMLElement | null, shouldShow: boolean, translateX: string): void => {
      if (buttonElement) {
        buttonElement.style.opacity = shouldShow ? "1" : "0";
        buttonElement.style.transform = shouldShow ? translateX : "";
      }
    }

    const updateButtonsVisibility = (): void => {
      if (scrollRef.current) {
        const shouldShowLeftButton: boolean = scrollRef.current.scrollLeft > 0 && hover;
        buttonsAnimations(leftButtonElement, shouldShowLeftButton, "translateX(2rem)")

        const shouldShowRightButton: boolean = (scrollRef.current.scrollWidth - 10 >= scrollRef.current.scrollLeft + scrollRef.current.clientWidth) && hover;
        buttonsAnimations(rightButtonElement, shouldShowRightButton, "translateX(-2rem)")
      }
    }

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateButtonsVisibility);
      updateButtonsVisibility()
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener(
          "scroll",
          updateButtonsVisibility
        );
      }
    };
  }, [scrollRef, hover]);

  const scrollLeft = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -sliderStep,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: sliderStep,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        className="SliderButtons"
        id="sliderButtons__left"
        onClick={scrollLeft}
      ></div>
      <div
        className="SliderButtons"
        id="sliderButtons__right"
        onClick={scrollRight}
      ></div>
    </>
  );
};

export default SliderButtons;
