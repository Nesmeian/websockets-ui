import WebSocket from 'ws';
import { connectUsers } from '../dataBase/db';
import { CustomWebSocket } from 'src/interfacess';
export default function addGameIdToUser(
  usersIds: string[],
  indexRoom: string,
): void {
  usersIds.forEach((userId) => {
    const createGameReg = {
      type: 'create_game',
      data: JSON.stringify({
        idGame: indexRoom,
        idPlayer: userId,
      }),
      id: 0,
    };
    const client = connectUsers.get(userId);
    if (client && client.readyState === WebSocket.OPEN) {
      (client as CustomWebSocket).userGameId = indexRoom;
      client.send(JSON.stringify(createGameReg));
    }
  });
}
