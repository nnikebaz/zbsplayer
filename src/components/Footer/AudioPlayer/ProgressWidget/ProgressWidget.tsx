import React, { useEffect, useState } from "react";
import "./ProgressWidget.scss";

interface ProgressWidgetProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const ProgressWidget: React.FC<ProgressWidgetProps> = ({ audioRef }) => {
  const [isValue, setIsValue] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time: number):String => {
    const minutes: number = Math.floor(time / 60)
    const seconds: number = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = Number(event.target.value);
    setIsValue(newValue);
  };

  const handleOnMouseUp = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = (isValue / 100) * duration
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setIsValue((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef]);

  return (
    <div className="ProgressWidget">
      <div className="ProgressWidget__currentTime">
        {formatTime(isValue / 100 * duration)}
      </div>
      <input
        type="range"
        className="ProgressWidget__seekBar"
        value={isValue}
        onChange={handleChange}
        onMouseUp={handleOnMouseUp}
        step={1}
        min={0}
        max={100}
      />
      <div className="ProgressWidget__totalTime">{formatTime(duration)}</div>
    </div>
  );
};

export default ProgressWidget;
