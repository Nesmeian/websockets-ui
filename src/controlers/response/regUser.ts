import { addUser } from '..//..//websocket_server/wsControlers/index';
import { data } from '../../dataBase/db/index';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import generateId from '../../utils/generateId';
import { CustomWebSocket } from 'src/interfacess';
import checkAuth from '..//..//dataBase/db/utils/checkAuthUser';
export default function regUser(wsData: string, ws: CustomWebSocket): void {
  const { name, password } = JSON.parse(String(wsData));
  const { users } = data;
  const regIndex = generateId();
  const userInformation = {
    name: name,
    password: password,
    id: regIndex,
  };
  const { error, errorText } = checkAuth(userInformation);
  if (error === false) {
    addUser(regIndex, ws);
    users.push(userInformation);
  }
  const regMessage = {
    type: 'reg',
    data: JSON.stringify({
      name: name,
      index: regIndex,
      error: error,
      errorText: errorText,
    }),
    id: data.id,
  };
  console.log('Show users', users);
  console.log(
    `${terminalMessage.blue}`,
    `reg user ${JSON.stringify(regMessage)}`,
  );
  ws.send(JSON.stringify(regMessage));
}
