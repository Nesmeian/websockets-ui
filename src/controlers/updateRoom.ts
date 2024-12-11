import WebSocket from 'ws';
import db from '../dataBase/db/index';
import terminalMessage from '../utils/consoleLogMessageCollor';
export default function updateRoom(
  data: string,
  ws: WebSocket,
  reg: true | false,
): void {
  const { rooms, users } = db;
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
    return;
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
  ws.send(JSON.stringify(regRoom));
}
