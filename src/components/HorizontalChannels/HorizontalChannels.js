import { Link } from "react-router-dom";
import s from "./horizontalChannels.module.css";

function HorizontalStations({ channels }) {
  return (
    <section className={s.scrollContainer}>
      {channels &&
        channels.map(
          (channel, i) =>
            i < 5 && (
              <Link className={s.channelWrapper} key={channel.id} to={`channel/${channel.id}`}>
                <img className={s.channelImage} src={channel.image} alt={channel.name} />
                <h4 className={s.channelName}>Sveriges radio {channel.name}</h4>
              </Link>
            )
        )}
    </section>
  );
}

export default HorizontalStations;
