import fsp from 'fs/promises';

export async function reverse(filepath) {
  const content = await fsp.readFile(filepath, 'utf-8');
  const lines = content.split('\n');
  const reversed = lines.reverse().join('\n');
  await fsp.writeFile(filepath, reversed);
}