import s from "../styles/upcomingProgram.module.css";
import { returnUpcomingProgram, msToLocalTime, removeDateStuff } from "../helperfunctions";
function UpcomingProgram({ channel }) {
  const { channelInfo, schedule } = channel;
  const channelImage = channelInfo.data.channel.image;
  const currentProgram = returnUpcomingProgram(schedule.data.schedule);
  const startTime = msToLocalTime(removeDateStuff(currentProgram.starttimeutc));
  return (
    <div className={s.upcoming}>
      <img
        className={s.upcomingImage}
        src={currentProgram.imageurl ? currentProgram.imageurl : channelImage}
        alt={currentProgram.title}
      />
      <h4 className={s.upcomingText}>
        {currentProgram.title} {currentProgram.subtitle} ({startTime})
      </h4>
    </div>
  );
}

export default UpcomingProgram;
