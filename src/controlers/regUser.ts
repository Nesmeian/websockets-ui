import { archiveUser } from '../dataBase/usersData/index';
import db from '../dataBase/db/index';
import increaseAmount from '../utils/increaseAmount';
import WebSocket from 'ws';
import messageColor from '..//utils/consoleLogMessageCollor';
export default function regUser(data: string, ws: WebSocket): void {
  const { name } = JSON.parse(String(data));

  increaseAmount(db);
  const regMessage = {
    type: 'reg',
    data: JSON.stringify({
      name: name,
      index: db.index.length,
      error: false,
      errorText: 'Something go wrong',
    }),
    id: db.id[db.index.length - 1],
  };
  archiveUser(data);
  console.log(`${messageColor.blue}`, `reg user ${JSON.stringify(regMessage)}`);
  ws.send(JSON.stringify(regMessage));
}
