import s from "./playerInfo.module.css";
import { cleanDateString, msToLocalTime, returnCurrentProgram } from "../../../helperfunctions";
import { FaMusic } from "react-icons/fa";
import React, { useContext } from "react";

const ChannelContext = React.createContext();

function PlayerInfo({ channel }) {
  const { channelInfo, schedule, song } = channel;
  const currentProgram = returnCurrentProgram(schedule.data.schedule);
  const currentTrack = song.data.playlist.song ? song.data.playlist.song : null;
  return (
    <ChannelContext.Provider value={{ channelInfo, currentProgram, currentTrack }}>
      <div className={s.wrapper}>
        <ChannelImage />
        <ChannelDescription />
        <CurrentPlaying />
      </div>
    </ChannelContext.Provider>
  );
}
export default PlayerInfo;

function ChannelImage() {
  const { channelInfo, currentProgram } = useContext(ChannelContext);
  const defaultImage = channelInfo.data.channel.image;
  const currentProgramImage = currentProgram.imageurl;
  return (
    <img
      className={s.channelImage}
      src={currentProgramImage ? currentProgramImage : defaultImage}
      alt={currentProgram.title}
    />
  );
}

function ChannelDescription() {
  const { currentProgram } = useContext(ChannelContext);
  return (
    <div className={s.descriptionContainer}>
      <h4>
        {currentProgram.title} {currentProgram.subtitle}
      </h4>
      <h5 className={s.channelDescription}>{currentProgram.description}</h5>
    </div>
  );
}

function CurrentPlaying() {
  const { currentProgram, currentTrack } = useContext(ChannelContext);
  const startTime = msToLocalTime(cleanDateString(currentProgram.starttimeutc));
  const endTime = msToLocalTime(cleanDateString(currentProgram.endtimeutc));
  return (
    <div className={s.currentlyPlayingContainer}>
      <h4 className={s.startTime}>{startTime}</h4>
      <div className={s.currentlyPlaying}>
        <h4 className={currentTrack ? s.animation : ""}>
          <FaMusic style={{ marginRight: "8px" }} />
          {currentTrack ? currentTrack.description : currentProgram.title}
        </h4>
      </div>
      <h4 className={s.endTime}>{endTime}</h4>
    </div>
  );
}
