import fs from 'fs';

export default function write(filepath, data, callback) {
  fs.writeFile(filepath, data, callback);
}