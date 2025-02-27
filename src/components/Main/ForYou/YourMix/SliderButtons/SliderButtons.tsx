import React, { useEffect} from "react";
import "./SliderButtons.scss";

interface SliderButtonsProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  hover: boolean;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ scrollRef, hover }) => {
  const yourMixItemWidth: number | undefined =
    document.querySelector(".YourMix__item")?.clientWidth;
  const sliderStep: number = yourMixItemWidth ? yourMixItemWidth * 2.5 : 0;

  useEffect(() => {
    const leftButtonElement: HTMLElement | null = document.querySelector(
      ".SliderButtons__left"
    );
    const rightButtonElement: HTMLElement | null = document.querySelector(
      ".SliderButtons__right"
    );

    const updateButtonsVisibility = (): void => {
      if (scrollRef.current) {
        const shouldShowLeftButton: boolean =
          scrollRef.current.scrollLeft > 0 && hover;
        leftButtonElement?.classList.toggle("visible", shouldShowLeftButton);

        const shouldShowRightButton: boolean =
          scrollRef.current.scrollWidth - 10 >=
            scrollRef.current.scrollLeft + scrollRef.current.clientWidth &&
          hover;
        rightButtonElement?.classList.toggle("visible", shouldShowRightButton);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateButtonsVisibility);
      updateButtonsVisibility();
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
      <div className="SliderButtons SliderButtons__left" onClick={scrollLeft}> 
        <svg
          className="SliderButtons__img"
          width="32"
          height="42"
          viewBox="0 0 32 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M31.0675 1.27475C30.6795 0.710071 30.0867 0.324539 29.419 0.202691C28.7513 0.0808426 28.0632 0.232623 27.5056 0.624748L1.59875 18.8247C1.26042 19.0644 0.984124 19.3833 0.79334 19.7545C0.602556 20.1257 0.50293 20.5381 0.50293 20.9567C0.50293 21.3754 0.602556 21.7878 0.79334 22.159C0.984124 22.5302 1.26042 22.8491 1.59875 23.0887L27.5056 41.2887C27.9269 41.5872 28.4269 41.7502 28.9406 41.7567C29.3581 41.7603 29.7701 41.6603 30.1407 41.4654C30.5114 41.2706 30.8296 40.9868 31.0675 40.6387C31.4514 40.0698 31.5969 39.3695 31.472 38.6918C31.347 38.014 30.9619 37.4144 30.4012 37.0247L7.54375 20.9567L30.4012 4.88875C30.9619 4.49911 31.347 3.89948 31.472 3.22174C31.5969 2.54399 31.4514 1.84365 31.0675 1.27475Z" />
        </svg>
      </div>
      <div className="SliderButtons SliderButtons__right" onClick={scrollRight}>
        <svg
          className="SliderButtons__img"
          width="32"
          height="42"
          viewBox="0 0 32 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.734751 1.27475C1.12272 0.710071 1.71556 0.324539 2.38326 0.202691C3.05097 0.0808426 3.73905 0.232623 4.29662 0.624748L30.2035 18.8247C30.5418 19.0644 30.8181 19.3833 31.0089 19.7545C31.1997 20.1257 31.2993 20.5381 31.2993 20.9567C31.2993 21.3754 31.1997 21.7878 31.0089 22.159C30.8181 22.5302 30.5418 22.8491 30.2035 23.0887L4.29662 41.2887C3.87535 41.5872 3.37538 41.7502 2.86163 41.7567C2.44417 41.7603 2.03219 41.6603 1.66151 41.4654C1.29084 41.2706 0.972693 40.9868 0.734751 40.6387C0.350818 40.0698 0.205322 39.3695 0.330265 38.6918C0.455208 38.014 0.840354 37.4144 1.401 37.0247L24.2585 20.9567L1.401 4.88875C0.840354 4.49911 0.455208 3.89948 0.330265 3.22174C0.205322 2.54399 0.350818 1.84365 0.734751 1.27475Z" />
        </svg>
      </div>
    </>
  );
};

export default SliderButtons;
