import { User } from 'src/interfacess';
import { data } from '..//index';
export default function searchRoomPlayersNames(indexRoom: string): User[] {
  const { rooms, users } = data;
  const currentRoom = rooms.find(({ roomId }) => roomId === indexRoom);
  const roomUsers = currentRoom?.roomUsers ?? [];
  return users.filter(({ name }) =>
    roomUsers.some((user) => user.name === name),
  );
}
