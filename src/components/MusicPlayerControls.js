import styles from "../styles/musicPlayer.module.css";
import back from "../images/back.svg";
import forward from "../images/forward.svg";
import play from "../images/play.svg";
import pause from "../images/pause.svg";

/**
 * TODO: Maybe use react icons?
 */
function MusicPlayerControls(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className={styles.musicButton}>
        <img className={styles.musicButtonImage} src={back} alt="Go back to the start" />
      </button>
      <button className={styles.musicButton} onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <img
          className={styles.musicButtonImage}
          src={props.isPlaying ? pause : play}
          alt="Play the audio"
        />
      </button>
      <button className={styles.musicButton}>
        <img className={styles.musicButtonImage} src={forward} alt="Go to live position" />
      </button>
    </div>
  );
}

export default MusicPlayerControls;
