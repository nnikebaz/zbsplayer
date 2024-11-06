import React, { useEffect, useState } from "react";
import "./GeneralControls.scss";

interface GeneralControlsProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const GeneralControls: React.FC<GeneralControlsProps> = ({ audioRef }) => {
  const [isPlay, setIsPlay] = useState(
    audioRef.current ? !audioRef.current.paused : false
  );

  const handleOnClick = (): void => {
    if (isPlay) {
      audioRef?.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlay((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      const updatePlayState = () => setIsPlay(!audioRef.current?.paused);
      audioRef.current.addEventListener("play", () => {
        updatePlayState
      });
      audioRef.current.addEventListener("pause", updatePlayState);

      return () => {
        audioRef.current?.removeEventListener("play", updatePlayState);
        audioRef.current?.removeEventListener("pause", updatePlayState);
      };
    }
  }, [audioRef]);

  return (
    <div className="GeneralControls">
      <svg
        width="101"
        height="100"
        viewBox="0 0 101 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="GeneralControls__prevButton"
      >
        <path
          d="M33 35.001C33 34.5037 33.1975 34.0268 33.5492 33.6752C33.9008 33.3235 34.3777 33.126 34.875 33.126C35.3723 33.126 35.8492 33.3235 36.2008 33.6752C36.5525 34.0268 36.75 34.5037 36.75 35.001V47.181L60.2513 33.546C62.2763 32.376 64.875 33.7935 64.875 36.156V63.846C64.875 66.2085 62.28 67.6335 60.2513 66.4597L36.75 52.8247V65.001C36.75 65.4983 36.5525 65.9752 36.2008 66.3268C35.8492 66.6784 35.3723 66.876 34.875 66.876C34.3777 66.876 33.9008 66.6784 33.5492 66.3268C33.1975 65.9752 33 65.4983 33 65.001V35.001Z"
          fill=""
        />
      </svg>
      <svg
        width="101"
        height="101"
        viewBox="0 0 101 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="GeneralControls__playButton"
        onClick={handleOnClick}
      >
        <circle cx="50.1423" cy="50.6927" r="50" />
        <path
          d="M67.8894 49.8267C68.5561 50.2116 68.5561 51.1739 67.8894 51.5588L39.6985 67.8348C39.0318 68.2197 38.1985 67.7386 38.1985 66.9688L38.1985 34.4167C38.1985 33.6469 39.0318 33.1658 39.6985 33.5507L67.8894 49.8267Z"
          fill="black"
          className={isPlay ? "GeneralControls__playPath hidden" : "GeneralControls__playPath"}
        />
        <path
          d="M36.6858 35.4247C36.6858 34.3201 37.5812 33.4247 38.6858 33.4247H44.803C45.9075 33.4247 46.803 34.3201 46.803 35.4247V64.5753C46.803 65.6799 45.9075 66.5753 44.803 66.5753H38.6858C37.5812 66.5753 36.6858 65.6799 36.6858 64.5753V35.4247Z
          M54.197 35.4247C54.197 34.3201 55.0925 33.4247 56.197 33.4247H62.3142C63.4188 33.4247 64.3142 34.3201 64.3142 35.4247V64.5753C64.3142 65.6799 63.4188 66.5753 62.3142 66.5753H56.197C55.0925 66.5753 54.197 65.6799 54.197 64.5753V35.4247Z"
          fill="black"
          className={isPlay ? "GeneralControls__pausePath" : "GeneralControls__pausePath hidden"}
        />
      </svg>
      <svg
        width="101"
        height="100"
        viewBox="0 0 101 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="GeneralControls__nextButton"
      >
        <path
          d="M68 35.001C68 34.5037 67.8025 34.0268 67.4508 33.6752C67.0992 33.3235 66.6223 33.126 66.125 33.126C65.6277 33.126 65.1508 33.3235 64.7992 33.6752C64.4475 34.0268 64.25 34.5037 64.25 35.001V47.181L40.7487 33.546C38.7237 32.376 36.125 33.7935 36.125 36.156V63.846C36.125 66.2085 38.72 67.6335 40.7487 66.4597L64.25 52.8247V65.001C64.25 65.4983 64.4475 65.9752 64.7992 66.3268C65.1508 66.6784 65.6277 66.876 66.125 66.876C66.6223 66.876 67.0992 66.6784 67.4508 66.3268C67.8025 65.9752 68 65.4983 68 65.001V35.001Z"
          fill=""
        />
      </svg>
    </div>
  );
};

export default GeneralControls;
