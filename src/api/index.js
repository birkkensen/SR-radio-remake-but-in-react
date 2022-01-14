const defaultApiUrl = "http://api.sr.se/api/v2";
/**
 * TODO: Cleanup functions
 */
export async function fetchAllChannels() {
  return fetch(`${defaultApiUrl}/channels?pagination=false&format=json`)
    .then((res) => res.json())
    .then((data) => data.channels)
    .catch((err) => console.error(err));
}

/**
 * !Not using a single one of these. Remove? Using Axios instead
 */
export async function fetchCurrentPlayingChannel(id) {
  return fetch(`${defaultApiUrl}/channels/${id}?format=json`)
    .then((res) => res.json())
    .then((data) => data.channel)
    .catch((err) => console.error(err));
}
export async function fetchChannelSchedule(id) {
  return fetch(`${defaultApiUrl}/scheduledepisodes?channelid=${id}&format=json&pagination=false`)
    .then((res) => res.json())
    .then((data) => data.schedule)
    .catch((err) => console.error(err));
}

export async function fetchSong(id) {
  return fetch(`${defaultApiUrl}/playlists/rightnow?channelid=${id}&format=json`)
    .then((res) => res.json())
    .then((data) => data.playlist.song)
    .catch((err) => console.error(err));
}
