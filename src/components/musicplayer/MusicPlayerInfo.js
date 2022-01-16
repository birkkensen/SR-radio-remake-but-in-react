import styles from "../../styles/musicPlayerInfo.module.css";
import { removeDateStuff, msToLocalTime, returnCurrentProgram } from "../../helperfunctions";
import { FaMusic } from "react-icons/fa";
import React, { useContext } from "react";

const ChannelContext = React.createContext();

function MusicPlayerInfo({ channel }) {
  const { channelInfo, schedule, song } = channel;
  const currentProgram = returnCurrentProgram(schedule.data.schedule);
  const currentTrack = song.data.playlist.song ? song.data.playlist.song : null;
  return (
    <ChannelContext.Provider value={{ channelInfo, currentProgram, currentTrack }}>
      <div className={styles.container}>
        <ChannelImage />
        <ChannelDescription />
        <CurrentPlaying />
      </div>
    </ChannelContext.Provider>
  );
}
export default MusicPlayerInfo;

function ChannelImage() {
  const { channelInfo, currentProgram } = useContext(ChannelContext);
  return (
    <img
      className={styles.channelImage}
      src={currentProgram.imageurl ? currentProgram.imageurl : channelInfo.data.channel.image}
      alt={currentProgram.title}
    />
  );
}

function ChannelDescription() {
  const { currentProgram } = useContext(ChannelContext);
  return (
    <div className={styles.descriptionContainer}>
      <h4>
        {currentProgram.title} {currentProgram.subtitle}
      </h4>
      <h5 className={styles.channelDescription}>{currentProgram.description}</h5>
    </div>
  );
}

function CurrentPlaying() {
  const { currentProgram, currentTrack } = useContext(ChannelContext);
  const startTime = msToLocalTime(removeDateStuff(currentProgram.starttimeutc));
  const endTime = msToLocalTime(removeDateStuff(currentProgram.endtimeutc));
  return (
    <div className={styles.currentlyPlayingContainer}>
      <h4 className={styles.startTime}>{startTime}</h4>
      <div className={styles.currentlyPlaying}>
        <h4 className={currentTrack ? styles.animation : ""}>
          <FaMusic style={{ marginRight: "8px" }} />
          {currentTrack ? currentTrack.description : currentProgram.title}
        </h4>
      </div>
      <h4 className={styles.endTime}>{endTime}</h4>
    </div>
  );
}
