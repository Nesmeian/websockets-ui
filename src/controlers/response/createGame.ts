import { CustomWebSocket } from 'src/interfacess';
import searchRoomPlayersNames from '..//../dataBase/db/controlers/searchRoomUsers';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import sendWsToChoseConnectsions from '..//..//..//src/utils/sendWsToChoseConnects';
import { connectUsers } from '..//../dataBase/db';
export default function createGame(
  ws: CustomWebSocket,
  indexRoom: string,
): void {
  const usersNames = searchRoomPlayersNames(indexRoom);
  const usersIds = usersNames.map(({ id }) => id);
  sendWsToChoseConnectsions(ws, usersIds);
  const createGameReg = {
    type: 'create_game',
    data: JSON.stringify({
      idGame: 1,
      idPlayer: 1,
    }),
    id: 0,
  };
  console.log(
    `${terminalMessage.blue}`,
    `create game ${JSON.stringify(createGameReg)}`,
  );
  console.log('new connect', connectUsers);
  // ws.send(JSON.stringify(createGameReg));
}
