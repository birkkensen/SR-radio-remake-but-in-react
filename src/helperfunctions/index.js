/**
 * TODO: Better naming on functions
 */

export function removeDateStuff(string) {
  return JSON.parse(string.replace(/[^0-9.]+/g, ""));
}

export function msToLocalTime(ms) {
  const date = new Date(ms);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}

export function checkAnimation(string) {
  console.log(string);
  if (string.length > 40) {
    return true;
  } else {
    return false;
  }
}
let upComingIndex = 0;
export function returnCurrentProgram(schedule) {
  const currentTime = new Date().getTime();
  for (let i = 0; i < schedule.length; i++) {
    const program = schedule[i];
    if (
      removeDateStuff(program.starttimeutc) < currentTime &&
      removeDateStuff(program.endtimeutc) > currentTime
    ) {
      upComingIndex = i + 1;
      return program;
    }
  }
}
export function returnUpcomingProgram(schedule) {
  return schedule[upComingIndex];
}
