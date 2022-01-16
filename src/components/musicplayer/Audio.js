import { useEffect, useRef, useState } from "react";
function Audio({ audio, isPlaying }) {
  const audioElement = useRef(null);
  const [firstPlay, setFirstPlay] = useState(true);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      if (firstPlay) {
        audioElement.current.currentTime += 70;
        console.log(audioElement);
        audioElement.current.volume = 0.2;
        setFirstPlay(false);
      }
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying, firstPlay]);
  return (
    <audio src={audio} ref={audioElement}>
      Your browser does not support the audio tag.
    </audio>
  );
}

export default Audio;
