import fs from 'fs/promises';
import pathToStorage from '../userStorage/storagePath';
export default async function takeUsers(): Promise<string> {
  return await fs.readFile(pathToStorage, 'utf-8');
}
