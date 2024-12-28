import { connectUsers } from '../dataBase/db';
import WebSocket from 'ws';
export default function sendWsToChoseConnectsions(
  message: string,
  usersIds: string[],
): void {
  usersIds.forEach((userId) => {
    const client = connectUsers.get(userId);
    if (client && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}
