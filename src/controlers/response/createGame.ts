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
  const players = searchRoomPlayersNames(indexRoom);
  const playerNames = players.map(({ name }) => name);
  const usersIds = players.map(({ id }) => id);
  addGameIdToUser(usersIds, indexRoom);
  const usingRooms = rooms.filter((room) =>
    room.roomUsers.some((user) => playerNames.includes(user.name ?? '')),
  );
  const filteredRooms = rooms.filter((room) => {
    return !usingRooms.some((usingRoom) => usingRoom.roomId === room.roomId);
  });
  rooms.length = 0;
  rooms.push(...filteredRooms);
  updateRoom(ws);
  const newGame: Game = { id: indexRoom, players: [] };
  games.push(newGame);
  console.log(`${terminalMessage.blue}`, `create game`);
}
