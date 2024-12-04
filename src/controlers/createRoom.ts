import WebSocket from 'ws';
export default function createRoom(ws: WebSocket): void {
  const createRoom = {
    type: 'creat_room',
    data: JSON.stringify([]),
    id: 0,
  };
  ws.send(JSON.stringify(createRoom));
}
