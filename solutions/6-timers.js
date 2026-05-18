import fs from 'fs';

export default function watch(filepath, interval, cb) {
  let lastMtime = null;
  const timerId = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      const currentMtime = stats.mtimeMs;
      if (lastMtime === null) {
        lastMtime = currentMtime;
      } else if (currentMtime > lastMtime) {
        lastMtime = currentMtime;
        cb(null);
      }
    });
  }, interval);
  return timerId;
}