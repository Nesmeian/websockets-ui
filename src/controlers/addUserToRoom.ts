import WebSocket from 'ws';
import terminalMessage from '../utils/consoleLogMessageCollor';
import {data as db} from '../dataBase/db'
export default function addUserToRoom(ws: WebSocket, data: string): void {
  const { indexRoom } = JSON.parse(data);
  console.log(db)
  const addUserReg = {
    type: 'add_user_to_room',
    data: JSON.stringify({
      indexRoom: indexRoom,
    }),
  };
  console.log(
    `${terminalMessage.blue}`,
    `add user to room ${JSON.stringify(addUserReg)}`,
  );
  ws.send(JSON.stringify(addUserReg));
}
