import generateId from '../../utils/generateId';
import { data } from '../../dataBase/db/index';
import terminalMessage from '../../utils/consoleLogMessageCollor';
import sendWsToAllUsers from '../../utils/sendWsToAllUsers';
import { CustomWebSocket } from 'src/interfacess';
import searchUserById from '..//../dataBase/db/utils/searchUserById';
export default function updateRoom(
  ws: CustomWebSocket,
  purpose?: undefined | 'create_game' | 'add_player',
  indexRoom?: undefined | string,
): void {
  const { rooms } = data;
  const user = searchUserById(ws.userId);
  if (purpose === 'create_game') {
    const gameExists = rooms.some(({ roomUsers }) =>
      roomUsers.some((userInRoom) => userInRoom.name === user?.name),
    );
    if (!gameExists) {
      const newRoom = {
        roomId: generateId(),
        roomUsers: [
          {
            name: user?.name,
            index: 1,
          },
        ],
      };
      rooms.push(newRoom);
      console.log(
        `${terminalMessage.blue}`,
        `update rooms ${JSON.stringify(rooms)}`,
      );
    }
  }
  if (purpose === 'add_player') {
    const targetRoom = rooms.find(({ roomId }) => roomId === indexRoom);
    const addUser = {
      name: user?.name,
      index: 2,
    };
    targetRoom?.roomUsers.push(addUser);
  }
  const regRoom = {
    type: 'update_room',
    data: JSON.stringify(rooms),
    id: 0,
  };
  console.log(
    `${terminalMessage.blue}`,
    `add new room ${JSON.stringify(rooms)}`,
  );
  sendWsToAllUsers(JSON.stringify(regRoom));
}
