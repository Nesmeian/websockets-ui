import WebSocket from 'ws';
import db from '../dataBase/db/index';
export default function updateRoom(ws: WebSocket): void {
  const { rooms } = db;
  const newRoom = {
    roomId: 1,
    roomUsers: [
      {
        name: 'jack',
        index: 1,
      },
    ],
  };
  rooms.push(newRoom);
  const regRoom = {
    type: 'update_room',
    data: JSON.stringify(rooms),
    id: 0,
  };
  console.log(rooms);
  console.log(newRoom);
  ws.send(JSON.stringify(regRoom));
}
