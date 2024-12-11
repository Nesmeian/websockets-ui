import { archiveUser } from '../dataBase/usersData/index';
import { data } from '../dataBase/db/index';
import WebSocket from 'ws';
import terminalMessage from '..//utils/consoleLogMessageCollor';
import generateId from '../utils/generateId';
export default function regUser(wsData: string, ws: WebSocket): void {
  const { name, password } = JSON.parse(String(wsData));
  const { users } = data;
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
    id: data.id,
  };
  data.index.push(regIndex);
  archiveUser(wsData);
  console.log(
    `${terminalMessage.blue}`,
    `reg user ${JSON.stringify(regMessage)}`,
  );
  ws.send(JSON.stringify(regMessage));
}
