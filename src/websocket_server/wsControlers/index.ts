import { CustomWebSocket } from 'src/interfacess';
import { connectUsers } from '..//..//dataBase/db/index';
export function addUser(userId: string, client: CustomWebSocket): void {
  connectUsers.set(userId, client);
  client.userId = userId;
}
export function removeUser(userId: string): void {
  connectUsers.delete(userId);
}
