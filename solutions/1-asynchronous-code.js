import fs from 'fs';

export default function print(filepath) {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}