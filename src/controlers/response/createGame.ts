import { CustomWebSocket, Game } from 'src/interfacess';
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
  addGameIdToUser(usersIds, indexRoom);
  rooms.splice(gameRoomIndex, 1);
  updateRoom(ws);
  const newGame: Game = { id: indexRoom, players: [] };
  games.push(newGame);
  console.log(`${terminalMessage.blue}`, `create game`);
  console.log('Игры', games);
}
