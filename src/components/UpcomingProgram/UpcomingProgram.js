import s from "./upcomingProgram.module.css";
import { returnUpcomingProgram, msToLocalTime, cleanDateString } from "../../helperfunctions";
import { Category } from "../";
function UpcomingProgram({ channel }) {
  const { channelInfo, schedule } = channel;
  const defaultImage = channelInfo.data.channel.image;
  const upcomingProgram = returnUpcomingProgram(schedule.data.schedule);
  if (upcomingProgram === undefined) return <></>;
  const startTime = msToLocalTime(cleanDateString(upcomingProgram.starttimeutc));
  return (
    <>
      <Category name={`${channel.channelInfo.data.channel.name} today`} />
      <div className={s.upcoming}>
        <img
          className={s.upcomingImage}
          src={upcomingProgram.imageurl ? upcomingProgram.imageurl : defaultImage}
          alt={upcomingProgram.title}
        />
        <h4 className={s.upcomingText}>
          {upcomingProgram.title} {upcomingProgram.subtitle} ({startTime})
        </h4>
      </div>
    </>
  );
}

export default UpcomingProgram;
