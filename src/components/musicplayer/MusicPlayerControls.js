import styles from "../../styles/musicPlayer.module.css";
import { IoPlaySkipBackCircleSharp, IoPlaySkipForwardCircleSharp } from "react-icons/io5";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
function MusicPlayerControls({ setIsPlaying, isPlaying }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.musicButton}>
        <IoPlaySkipBackCircleSharp className={styles.musicButtonImage} alt="Go back to the start" />
      </button>
      <button className={styles.musicButton} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? (
          <AiFillPauseCircle alt="Pause the sound" className={styles.musicButtonImage} />
        ) : (
          <AiFillPlayCircle alt="Play the sound" className={styles.musicButtonImage} />
        )}
      </button>
      <button className={styles.musicButton}>
        <IoPlaySkipForwardCircleSharp
          className={styles.musicButtonImage}
          alt="Go to live position"
        />
      </button>
    </div>
  );
}

export default MusicPlayerControls;
