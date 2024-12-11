import { connectUsers } from '../dataBase/db/index';
import { WebSocket } from 'ws';
export default function sendWsToAllUsers(message: string): void {
  connectUsers.forEach((client: WebSocket) => {
    if (client.readyState === client.OPEN) {
      client.send(message);
    }
  });
}
