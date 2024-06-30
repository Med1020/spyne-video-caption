export const secondsTohms = (playedSeconds: number) => {
  var h = Math.floor(playedSeconds / 3600);
  var m = Math.floor((playedSeconds % 3600) / 60);
  var s = Math.floor((playedSeconds % 3600) % 60);
  let hms = [h, m, s];
  return hms;
};

export const closestTime = (
  currentTime: string,
  captionTimestamp: string
): number => {
  for (let i = 0; i < 2; i++) {
    if (
      parseInt(captionTimestamp.split(":")[i]) -
        parseInt(currentTime.split(":")[i]) !==
      0
    ) {
      return -1;
    }
  }
  return (
    parseInt(captionTimestamp.split(":")[2]) -
    parseInt(currentTime.split(":")[2])
  );
};
