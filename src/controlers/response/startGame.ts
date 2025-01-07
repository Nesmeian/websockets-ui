import { CustomWebSocket, Game } from 'src/interfacess';
import { connectUsers } from '../../dataBase/db/index';
export default function startGame(
  ws: CustomWebSocket,
  currentGame: Game,
): void {
  if (currentGame.game) {
    if (currentGame.game.length > 1) {
      currentGame.game?.forEach((e) => {
        const resData = {
          type: 'start_game',
          data: JSON.stringify({
            ships: e.ships,
            currentPlayerIndex: e.idPlayer,
          }),
          id: 0,
        };
        const client = connectUsers.get(e.idPlayer);
        if (client && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(resData));
        }
      });
    }
  }
}
