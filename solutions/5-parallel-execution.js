import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

export function getDirectorySize(dirpath, cb) {
  fs.readdir(dirpath, (err, files) => {
    if (err) {
      cb(err);
      return;
    }
    const fullPaths = files.map(file => path.join(dirpath, file));
    async.map(fullPaths, fs.stat, (err, stats) => {
      if (err) {
        cb(err);
        return;
      }
      const sizes = stats.map(stat => (stat.isFile() ? stat.size : 0));
      const total = _.sum(sizes);
      cb(null, total);
    });
  });
}