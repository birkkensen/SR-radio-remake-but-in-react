import { removeDateStuff, returnCurrentProgram } from "../helperfunctions";
import { useState, useEffect } from "react";

function ProgressBar({ channel }) {
  const [progress, setProgress] = useState(0);
  const { schedule } = channel;
  const currentProgram = returnCurrentProgram(schedule.data.schedule);
  const startTime = removeDateStuff(currentProgram.starttimeutc);
  const endTime = removeDateStuff(currentProgram.endtimeutc);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const progress = ((currentTime - startTime) / (endTime - startTime)) * 100;
      setProgress(progress);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <progress max="100" value={progress}></progress>
    </div>
  );
}

export default ProgressBar;
