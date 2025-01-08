import sendWsToChoseConnectsions from '..//..//utils/sendWsToChoseConnects';
import { CustomWebSocket, Game } from '../../interfacess';
export default function turn(ws: CustomWebSocket, currentGame: Game): void {
  if (currentGame) {
    currentGame.game?.forEach((players, i) => {
      const resData = {
        type: 'turn',
        data: JSON.stringify({
          currentPlayer: i,
        }),
        id: 0,
      };
      sendWsToChoseConnectsions(JSON.stringify(resData), [players.idPlayer]);
    });
  }
}
