import { CustomWebSocket } from '..//../interfacess';
import createGame from '../response/createGame';
import generateId from '..//../utils/generateId';
import searchUserById from '..//../dataBase/db/utils/searchUserById';
import { data } from '../../dataBase/db/index';

export default function singlePlay(ws: CustomWebSocket): void {
  const { rooms } = data;
  const user = searchUserById(ws.userId);
  const createGameId = generateId();
  const newRoom = {
    roomId: createGameId,
    roomUsers: [
      {
        name: user?.name,
        index: 1,
      },
    ],
  };
  rooms.push(newRoom);
  createGame(ws, createGameId);
}
