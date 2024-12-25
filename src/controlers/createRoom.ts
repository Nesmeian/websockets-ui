import sendWsToAllUsers from '../utils/sendWsToAllUsers';
import { data } from '../dataBase/db';
import terminalMessage from '../utils/consoleLogMessageCollor';
import updateRoom from './updateRoom';
import updateWinners from './updateWinners';
import { CustomWebSocket } from 'src/interfacess';
export default function createRoom(ws: CustomWebSocket): void {
  const { rooms } = data;
  const createRoomReg = {
    type: 'creat_room',
    data: JSON.stringify(rooms),
    id: 0,
  };
  console.log(
    `${terminalMessage.blue}`,
    `create room ${JSON.stringify(createRoomReg)}`,
  );
  sendWsToAllUsers(JSON.stringify(createRoomReg));
  updateWinners();
  updateRoom(ws, false);
}
