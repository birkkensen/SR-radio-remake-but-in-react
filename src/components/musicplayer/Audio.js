import { useRef, useEffect } from "react";
function Audio({ audio, isPlaying }) {
  const audioElement = useRef(null);
  useEffect(() => {
    audio && (isPlaying ? audioElement.current.play() : audioElement.current.pause());
  });
  return (
    <>
      {audio && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio ref={audioElement}>
          <source src={audio.src} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </>
  );
}

export default Audio;
