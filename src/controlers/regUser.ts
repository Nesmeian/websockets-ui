import { archiveUser } from '../dataBase/usersData/index';
import db from '../dataBase/db/index';
import WebSocket from 'ws';
import terminalMessage from '..//utils/consoleLogMessageCollor';
import generateId from '../utils/generateId';
export default function regUser(data: string, ws: WebSocket): void {
  const { name, password } = JSON.parse(String(data));
  const { users } = db;
  const regIndex = generateId();
  const userInformation = {
    name: name,
    password: password,
    index: regIndex,
  };

  users.push(userInformation);
  const regMessage = {
    type: 'reg',
    data: JSON.stringify({
      name: name,
      index: regIndex,
      error: false,
      errorText: 'Something go wrong',
    }),
    id: db.id,
  };
  db.index.push(regIndex);
  archiveUser(data);
  console.log(
    `${terminalMessage.blue}`,
    `reg user ${JSON.stringify(regMessage)}`,
  );
  ws.send(JSON.stringify(regMessage));
}
