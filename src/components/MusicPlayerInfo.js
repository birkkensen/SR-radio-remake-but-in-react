import styles from "../styles/musicPlayerInfo.module.css";
import {
  removeDateStuff,
  msToLocalTime,
  // checkAnimation,
  returnCurrentProgram,
} from "../helperfunctions";
import { FaMusic } from "react-icons/fa";

/**
 * TODO: Break up into smaller components? Or at least functions
 */
function MusicPlayerInfo({ channel }) {
  const { schedule, song } = channel;
  const currentProgram = returnCurrentProgram(schedule.data.schedule);
  const startTime = msToLocalTime(removeDateStuff(currentProgram.starttimeutc));
  const endTime = msToLocalTime(removeDateStuff(currentProgram.endtimeutc));
  return (
    <div className={styles.container}>
      <img
        className={styles.channelImage}
        src={currentProgram.imageurl ? currentProgram.imageurl : ""}
        alt={currentProgram.title}
      />
      <div className={styles.descriptionContainer}>
        <h4>
          {currentProgram.title} {currentProgram.subtitle}
        </h4>
        <h5 className={styles.channelDescription}>{currentProgram.description}</h5>
      </div>
      <div className={styles.currentlyPlayingContainer}>
        <h4 className={styles.startTime}>{startTime}</h4>
        <div className={styles.currentlyPlaying}>
          <h4 className={"styles.animation"}>
            <FaMusic style={{ marginRight: "8px" }} />
            {song.data.playlist.song ? song.data.playlist.song.description : currentProgram.title}
          </h4>
        </div>
        <h4 className={styles.endTime}>{endTime}</h4>
      </div>
    </div>
  );
}

export default MusicPlayerInfo;
