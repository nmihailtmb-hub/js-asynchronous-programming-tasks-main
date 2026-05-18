import fsp from 'fs/promises';

export async function exchange(firstPath, secondPath) {
  const content1 = await fsp.readFile(firstPath, 'utf-8');
  const content2 = await fsp.readFile(secondPath, 'utf-8');
  await fsp.writeFile(firstPath, content2);
  await fsp.writeFile(secondPath, content1);
}