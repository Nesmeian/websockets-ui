import WebSocket from 'ws';
import db from '../dataBase/db';
import messageColor from '../utils/consoleLogMessageCollor';
export default function updateWinners(ws: WebSocket): void {
  const winnersData = {
    type: 'update_winners',
    data: JSON.stringify([]),
    id: db.id[db.index.length - 1],
  };
  console.log(
    `${messageColor.blue}`,
    `update winner ${JSON.stringify(winnersData)}`,
  );
  ws.send(JSON.stringify(winnersData));
}
