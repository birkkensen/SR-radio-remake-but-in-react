import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/verticalChannels.module.css";

function VerticalChannels({ channels }) {
  return (
    <section>
      {channels &&
        channels.map(
          (channel, i) =>
            i > 5 && (
              <Link key={channel.id} to={`channel/${channel.id}`} className={styles.channelWrapper}>
                <img className={styles.channelImage} src={channel.image} alt={channel.name} />
                <div className={styles.channelDescription}>
                  <h4>Sveriges radio {channel.name}</h4>
                  <h5>{channel.channeltype}</h5>
                </div>
              </Link>
            )
        )}
    </section>
  );
}

export default VerticalChannels;
