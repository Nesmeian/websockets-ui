import { CustomWebSocket } from 'src/interfacess';
import searchRoomPlayersNames from '..//../dataBase/db/controlers/searchRoomUsers';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import sendWsToChoseConnectsions from '..//..//..//src/utils/sendWsToChoseConnects';
import { data } from '..//..//dataBase/db';
import updateRoom from './updateRoom';
export default function createGame(
  ws: CustomWebSocket,
  indexRoom: string,
): void {
  const { rooms } = data;
  const gameRoomIndex = rooms.findIndex(({ roomId }) => roomId === indexRoom);
  rooms.splice(gameRoomIndex, 1);
  console.log('jack', rooms);
  updateRoom(ws);
  const usersNames = searchRoomPlayersNames(indexRoom);
  const usersIds = usersNames.map(({ id }) => id);
  const createGameReg = {
    type: 'create_game',
    data: JSON.stringify({
      idGame: 1,
      idPlayer: 1,
    }),
    id: 0,
  };
  sendWsToChoseConnectsions(JSON.stringify(createGameReg), usersIds);
  console.log(
    `${terminalMessage.blue}`,
    `create game ${JSON.stringify(createGameReg)}`,
  );
}
