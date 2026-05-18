import fsp from 'fs/promises';

export function getTypes(paths) {
  const promises = paths.map(p =>
    fsp.stat(p)
      .then(stat => (stat.isDirectory() ? 'directory' : 'file'))
      .catch(() => null)
  );
  return Promise.all(promises);
}