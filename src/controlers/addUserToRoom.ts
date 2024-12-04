import WebSocket from 'ws';
export default function addUserToRoom(ws: WebSocket): void {
  const addUser = {
    type: 'add_user_to_room',
    data: JSON.stringify({
      index: 0,
    }),
  };
  ws.send(JSON.stringify(addUser));
}
