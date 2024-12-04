import WebSocket from 'ws';
import db from '../dataBase/db/index';
export default function updateRoom(ws: WebSocket): void {
  const { room } = db;
  const updateRoom = {
    type: 'update_room',
    data: JSON.stringify(room),
    id: 0,
  };
  ws.send(JSON.stringify(updateRoom));
}
