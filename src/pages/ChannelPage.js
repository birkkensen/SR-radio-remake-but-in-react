import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInterval } from "../hooks/useInterval";
import { Navbar, BackBtn, MusicPlayer, UpcomingProgram, Category } from "../components";
import { fetchChannel } from "../api";

function ChannelPage() {
  const { id } = useParams();
  const [channel, setChannel] = useState({ channelInfo: null, schedule: null, song: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChannel(id).then((res) => {
      const [channelInfo, schedule, song] = res;
      setChannel({ channelInfo, schedule, song });
      setLoading(false);
    });
  }, [id]);

  useInterval(() => {
    fetchChannel(id).then((res) => {
      const [channelInfo, schedule, song] = res;
      setChannel({ channelInfo, schedule, song });
    });
  }, [10000]);
  if (loading) return <h1 style={loadingStyle}>Loading...</h1>;
  return (
    <>
      <Navbar />
      <BackBtn />
      <MusicPlayer channel={channel} />
      <Category name={`${channel.channelInfo.data.channel.name} today`} />
      <UpcomingProgram channel={channel} />
    </>
  );
}

export default ChannelPage;

const loadingStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};
