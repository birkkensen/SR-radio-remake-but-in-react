import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navbar, BackBtn, MusicPlayer } from "../components";
const defaultApiUrl = "http://api.sr.se/api/v2";

/**
 * TODO: Come up with a way to re-fetch every (10?) seconds
 * TODO: Error handle if the show doesn't have a scedule?? Do they all have one
 */
function ChannelPage() {
  const { id } = useParams();
  const [channel, setChannel] = useState({ audio: null, schedule: null, song: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChannel() {
      const [audio, schedule, song] = await Promise.all([
        axios(`${defaultApiUrl}/channels/${id}?format=json`),
        axios(`${defaultApiUrl}/scheduledepisodes?channelid=${id}&format=json&pagination=false`),
        axios(`${defaultApiUrl}/playlists/rightnow?channelid=${id}&format=json`),
      ]);
      setChannel({ audio, schedule, song });
      setLoading(false);
    }
    fetchChannel();
  }, [id]);

  return (
    <>
      <Navbar />
      <BackBtn />
      {loading ? <h1>Loading...</h1> : <MusicPlayer channel={channel} />}
    </>
  );
}

export default ChannelPage;
