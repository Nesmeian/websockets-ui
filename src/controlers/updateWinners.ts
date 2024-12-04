import WebSocket from 'ws';
import db from '../dataBase/db';
export default function updateWinners(ws: WebSocket): void {
  const winnersData = {
    type: 'update_winners',
    data: JSON.stringify([]),
    id: db.id[db.index.length - 1],
  };
  ws.send(JSON.stringify(winnersData));
}
