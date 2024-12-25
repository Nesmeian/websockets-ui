import generateId from '../utils/generateId';
import { data } from '../dataBase/db/index';
import terminalMessage from '../utils/consoleLogMessageCollor';
import sendWsToAllUsers from '../utils/sendWsToAllUsers';
import { CustomWebSocket } from 'src/interfacess';
import searchUserById from '../dataBase/db/controlers/searchUserById'
export default function updateRoom(ws:CustomWebSocket , reg: true | false): void {
  const { rooms } = data;
  const user=searchUserById(ws.userId)
  if (!reg) {
    const newRoom = {
      roomId: Number(generateId()),
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
