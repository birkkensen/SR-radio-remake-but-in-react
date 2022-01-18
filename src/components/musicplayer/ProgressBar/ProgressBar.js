import { cleanDateString } from "../../../helperfunctions";
import { useState, useEffect } from "react";
import s from "./progressBar.module.css";

function ProgressBar({ currentProgram }) {
  const [progress, setProgress] = useState(0);
  const startTime = cleanDateString(currentProgram.starttimeutc);
  const endTime = cleanDateString(currentProgram.endtimeutc);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const progress = ((currentTime - startTime) / (endTime - startTime)) * 100;
      setProgress(progress);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className={s.progress}>
      <div className={s.progressValue} style={{ width: `${progress}%` }}></div>
      <div className={s.progressBall}></div>
    </div>
  );
}

export default ProgressBar;
