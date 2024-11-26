import takeUsers from '../userManager';
import fs from 'fs/promises';
import { User } from '..//../interfacess/index';
import pathToStorage from '../userStorage/storagePath';
export default async function archiveUser(newUser: User): Promise<void> {
  const users: User[] = JSON.parse(await takeUsers());
  users.push(newUser);
  fs.writeFile(pathToStorage, JSON.stringify(users, null, 2));
}
