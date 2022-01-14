import { Link } from "react-router-dom";
import styles from "../styles/horizontalChannels.module.css";

function HorizontalStations({ channels }) {
  return (
    <section className={styles.scrollContainer}>
      {channels &&
        channels.map(
          (channel, i) =>
            i < 5 && (
              <Link className={styles.channelWrapper} key={channel.id} to={`channel/${channel.id}`}>
                <img className={styles.channelImage} src={channel.image} alt={channel.name} />
                <h4 className={styles.channelName}>Sveriges radio {channel.name}</h4>
              </Link>
            )
        )}
    </section>
  );
}

export default HorizontalStations;
