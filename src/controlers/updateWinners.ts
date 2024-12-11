import WebSocket from 'ws';
import db from '../dataBase/db';
import terminalMessage from '../utils/consoleLogMessageCollor';
export default function updateWinners(ws: WebSocket): void {
  const winnersData = {
    type: 'update_winners',
    data: JSON.stringify([]),
    id: db.id,
  };
  console.log(
    `${terminalMessage.blue}`,
    `update winner ${JSON.stringify(winnersData)}`,
  );
  ws.send(JSON.stringify(winnersData));
}
