import { removeDateStuff } from "../../helperfunctions";
import { useState, useEffect } from "react";
import styles from "../../styles/progressBar.module.css";

function ProgressBar({ currentProgram }) {
  const [progress, setProgress] = useState(0);
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
    <div className={styles.progress}>
      <div className={styles.progressValue} style={{ width: `${progress}%` }}></div>
      <div className={styles.progressBall}></div>
    </div>
  );
}

export default ProgressBar;
