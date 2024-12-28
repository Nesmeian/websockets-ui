import { CustomWebSocket } from '../interfacess/index';
export default function sendWsToChoseConnectsions(
  ws: CustomWebSocket,
  usersIds: string[],
): void {
  console.log('USER ID', ws.userId);
}
