import { PlayerInfo, ProgressBar, PlayerControls, Audio } from "./";
import { returnCurrentProgram } from "../../helperfunctions";
import { useState } from "react";
function MusicPlayer({ channel }) {
  const { channelInfo, schedule } = channel;
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState();
  const audioSrc = channelInfo.data.channel.liveaudio.url;
  const currentProgram = returnCurrentProgram(schedule.data.schedule);

  return (
    <>
      {currentProgram ? (
        <>
          <PlayerInfo channel={channel} />
          <Audio audio={audio} isPlaying={isPlaying} />
          <ProgressBar currentProgram={currentProgram} />
          <PlayerControls
            audio={audioSrc}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setAudio={setAudio}
          />
        </>
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </>
  );
}

export default MusicPlayer;
