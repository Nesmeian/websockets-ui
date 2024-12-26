import updateRoom from '../response/updateRoom';
import updateWinners from '../response/updateWinners';
import { CustomWebSocket } from 'src/interfacess';
export default function createRoom(ws: CustomWebSocket): void {
  updateWinners();
  updateRoom(ws, 'create_game');
}
