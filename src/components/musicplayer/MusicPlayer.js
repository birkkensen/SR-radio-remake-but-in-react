import { useState } from "react";
import { Audio, MusicPlayerControls, MusicPlayerInfo, ProgressBar } from "./";
import { returnCurrentProgram } from "../../helperfunctions";

function MusicPlayer({ channel }) {
  const { channelInfo, schedule } = channel;
  const [isPlaying, setIsPlaying] = useState(false);

  const audioSrc = channelInfo.data.channel.liveaudio.url;
  const currentProgram = returnCurrentProgram(schedule.data.schedule);

  if (!currentProgram) return <h1>Something went wrong</h1>;
  return (
    <>
      <MusicPlayerInfo channel={channel} />
      <Audio audio={audioSrc} isPlaying={isPlaying} />
      <ProgressBar currentProgram={currentProgram} />
      <MusicPlayerControls setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    </>
  );
}

export default MusicPlayer;
