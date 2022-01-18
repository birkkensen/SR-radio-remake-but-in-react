import s from "./playerControls.module.css";
import { IoPlaySkipBackCircleSharp, IoPlaySkipForwardCircleSharp } from "react-icons/io5";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useState } from "react";
function PlayerControls({ audio, isPlaying, setIsPlaying, setAudio }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  function loadAudio() {
    if (!hasLoaded) {
      const _audio = new Audio(audio);
      _audio.load();
      _audio.addEventListener("canplaythrough", () => {
        setAudio(_audio);
        setHasLoaded(true);
      });
    }
  }

  return (
    <div className={s.buttonContainer}>
      <Rewind />
      <PlayPause handleLoadClick={loadAudio} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      <Forward />
    </div>
  );
}

export default PlayerControls;

function PlayPause({ setIsPlaying, isPlaying, handleLoadClick }) {
  return (
    <button
      className={s.playerButton}
      onClick={() => {
        handleLoadClick();
        setIsPlaying(!isPlaying);
      }}
    >
      {isPlaying ? (
        <AiFillPauseCircle alt="Pause the sound" className={s.playerButtonImage} />
      ) : (
        <AiFillPlayCircle alt="Play the sound" className={s.playerButtonImage} />
      )}
    </button>
  );
}

function Rewind() {
  return (
    <button className={s.playerButton}>
      <IoPlaySkipBackCircleSharp className={s.playerButtonImage} alt="Go back to the start" />
    </button>
  );
}

function Forward() {
  return (
    <button className={s.playerButton}>
      <IoPlaySkipForwardCircleSharp className={s.playerButtonImage} alt="Go to live position" />
    </button>
  );
}
