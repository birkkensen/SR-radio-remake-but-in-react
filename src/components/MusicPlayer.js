import { useState, useEffect, useRef } from "react";
import MusicPlayerInfo from "./MusicPlayerInfo";
import MusicPlayerControls from "./MusicPlayerControls";
import ProgressBar from "./ProgressBar";

/**
 * TODO: Break out audio into its own
 */
function MusicPlayer({ channel }) {
  const { audio } = channel;
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstPlay, setFirstPlay] = useState(true);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      if (firstPlay) {
        audioElement.current.currentTime += 70;
        setFirstPlay(false);
      }
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying, firstPlay]);
  return (
    <>
      <MusicPlayerInfo channel={channel} />
      <audio src={audio.data.channel.liveaudio.url} ref={audioElement}>
        Your browser does not support the audio tag.
      </audio>
      <ProgressBar channel={channel} />
      <MusicPlayerControls setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    </>
  );
}

export default MusicPlayer;
