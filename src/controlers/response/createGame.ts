import { data } from '../../dataBase/db';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import WebSocket from 'ws';
export default function createGame(ws: WebSocket, indexRoom: string): void {
  const { rooms } = data;
  const currentRoom = rooms.find(({ roomId }) => roomId === indexRoom);
  const roomUsers = currentRoom?.roomUsers ?? [];
  console.log(roomUsers);
  const createGameReg = {
    type: 'create_game',
    data: JSON.stringify({
      idGame: 1,
      idPlayer: 1,
    }),
    id: 0,
  };
  console.log(
    `${terminalMessage.blue}`,
    `create game ${JSON.stringify(createGameReg)}`,
  );
  // ws.send(JSON.stringify(createGameReg));
}
