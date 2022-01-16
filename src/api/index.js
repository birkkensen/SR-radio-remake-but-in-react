import axios from "axios";
const defaultApiUrl = "http://api.sr.se/api/v2";

export async function fetchAllChannels() {
  try {
    const res = await axios.get(`${defaultApiUrl}/channels?pagination=false&format=json`);
    return res.data.channels;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchChannel(id) {
  try {
    const channel = await Promise.all([
      axios.get(`${defaultApiUrl}/channels/${id}?format=json`),
      axios.get(`${defaultApiUrl}/scheduledepisodes?channelid=${id}&format=json&pagination=false`),
      axios.get(`${defaultApiUrl}/playlists/rightnow?channelid=${id}&format=json`),
    ]);
    return channel;
  } catch (err) {
    console.error(err);
  }
}
