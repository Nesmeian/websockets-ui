import terminalMessage from '../../utils/consoleLogMessageCollor';
import { CustomWebSocket } from 'src/interfacess';
import { data as db } from '../../dataBase/db';
import updateRoom from '../response/updateRoom';
import createGame from '../response/createGame';
export default function addUserToRoom(ws: CustomWebSocket, data: string): void {
  const { indexRoom } = JSON.parse(data);
  const { rooms, users } = db;
  const { userId } = ws;
  const curentUser = users.find(({ id }) => id === userId)?.name;
  const targetRoom = rooms.find(({ roomId }) => roomId === indexRoom);
  const checkPlayer = !!targetRoom?.roomUsers.find(
    ({ name }) => name === curentUser,
  );
  if (!checkPlayer) {
    updateRoom(ws, 'add_player', indexRoom);
    createGame(ws, indexRoom);
    console.log(`${terminalMessage.blue}`, `add user to room`);
  }
}
