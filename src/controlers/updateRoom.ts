import WebSocket from 'ws';
import { data } from '../dataBase/db/index';
import terminalMessage from '../utils/consoleLogMessageCollor';
import sendWsToAllUsers from '../utils/sendWsToAllUsers';
export default function updateRoom(ws: WebSocket, reg: true | false): void {
  const { rooms, users } = data;
  if (!reg) {
    const newRoom = {
      roomId: rooms.length,
      roomUsers: [
        {
          name: users[rooms.length].name,
          index: 1,
        },
      ],
    };
    rooms.push(newRoom);
    console.log(
      `${terminalMessage.blue}`,
      `update rooms ${JSON.stringify(rooms)}`,
    );
  }

  const regRoom = {
    type: 'update_room',
    data: JSON.stringify(rooms),
    id: 0,
  };
  console.log(
    `${terminalMessage.blue}`,
    `add new room ${JSON.stringify(rooms)}`,
  );
  sendWsToAllUsers(JSON.stringify(regRoom));
}
