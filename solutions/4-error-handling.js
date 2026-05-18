import fs from 'fs';

export function move(from, to, callback) {
  fs.readFile(from, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(to, data, (err) => {
      if (err) {
        callback(err);
        return;
      }
      fs.unlink(from, callback);
    });
  });
}