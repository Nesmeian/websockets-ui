import messageColor from '../utils/consoleLogMessageCollor';
import WebSocket from 'ws';
export default function createRoom(ws: WebSocket): void {
  const createRoomReg = {
    type: 'creat_room',
    data: JSON.stringify([]),
    id: 0,
  };
  console.log(
    `${messageColor.blue}`,
    `create game ${JSON.stringify(createRoomReg)}`,
  );
  ws.send(JSON.stringify(createRoomReg));
}
