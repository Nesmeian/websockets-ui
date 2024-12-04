import { archiveUser } from '../dataBase/usersData/index';
import db from '../dataBase/db/index';
import WebSocket from 'ws';
export default function regUser(data: string, ws: WebSocket): void {
  const { name, password } = JSON.parse(String(data));
  console.log(password);
  const regMessage = {
    type: 'reg',
    data: JSON.stringify({
      name: name,
      index: db.index,
      error: false,
      errorText: 'Something go wrong',
    }),
    id: db.id,
  };

  archiveUser(data);
  ws.send(JSON.stringify(regMessage));
}
