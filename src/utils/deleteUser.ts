import { updateRoom } from '../controlers';
import { connectUsers } from '../dataBase/db/index';
import { data } from '../dataBase/db/index';
import { CustomWebSocket } from '../interfacess';
export default function deleteWsUser(
  ws: CustomWebSocket,
  userId: string,
): void {
  connectUsers.delete(userId);
  const { rooms, users } = data;
  const user = users.find(({ id }) => id === userId);
  const gameIndex = user
    ? rooms.findIndex(({ roomUsers }) =>
        roomUsers.find(({ name }) => name === user.name),
      )
    : -1;
  if (gameIndex !== -1) {
    rooms.splice(gameIndex, 1);
  }
  updateRoom(ws);
  console.log('connection stop');
}
