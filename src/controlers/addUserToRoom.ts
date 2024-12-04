import WebSocket from 'ws';
import messageColor from '../utils/consoleLogMessageCollor';
export default function addUserToRoom(ws: WebSocket): void {
  const addUserReg = {
    type: 'add_user_to_room',
    data: JSON.stringify({
      index: 0,
    }),
  };
  console.log(
    `${messageColor.blue}`,
    `add user to room ${JSON.stringify(addUserReg)}`,
  );
  ws.send(JSON.stringify(addUserReg));
}
