import { CustomWebSocket } from 'src/interfacess';
import searchRoomPlayersNames from '..//..//dataBase/db/utils/searchRoomUsers';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import addGameIdToUser from '..//..//..//src/utils/addGameIdToUser';
import { data } from '..//..//dataBase/db';
import updateRoom from './updateRoom';
export default function createGame(
  ws: CustomWebSocket,
  indexRoom: string,
): void {
  const { rooms, games } = data;
  const gameRoomIndex = rooms.findIndex(({ roomId }) => roomId === indexRoom);
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
  addGameIdToUser(JSON.stringify(createGameReg), usersIds, indexRoom);
  rooms.splice(gameRoomIndex, 1);
  updateRoom(ws);
  const newGame = { id: indexRoom, game: [] };
  games.push(newGame);
  console.log(
    `${terminalMessage.blue}`,
    `create game ${JSON.stringify(createGameReg)}`,
  );
}
