import WebSocket from 'ws';
import { connectUsers } from '../dataBase/db';
import sendWsToChoseConnectsions from './sendWsToChoseConnects';
import { CustomWebSocket } from 'src/interfacess';
export default function addGameIdToUser(
  gameData: string,
  usersIds: string[],
  indexRoom: string,
): void {
  sendWsToChoseConnectsions(gameData, usersIds);
  usersIds.forEach((userId) => {
    const client = connectUsers.get(userId);
    if (client && client.readyState === WebSocket.OPEN) {
      (client as CustomWebSocket).userGameId = indexRoom;
    }
  });
}
