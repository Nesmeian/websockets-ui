import { data } from '../../dataBase/db/index';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import generateId from '../../utils/generateId';
import { CustomWebSocket } from 'src/interfacess';
export default function regUser(wsData: string, ws: CustomWebSocket): void {
  const { name, password } = JSON.parse(String(wsData));
  const { users } = data;
  const regIndex = generateId();
  const userInformation = {
    name: name,
    password: password,
    id: regIndex,
  };
  ws.userId=regIndex
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
  console.log(
    `${terminalMessage.blue}`,
    `reg user ${JSON.stringify(regMessage)}`,
  );
  ws.send(JSON.stringify(regMessage));
}
