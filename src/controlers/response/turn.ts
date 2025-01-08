import sendWsToChoseConnectsions from '..//..//utils/sendWsToChoseConnects';
import { Game } from '../../interfacess';
export default function turn(currentGame: Game, next?: boolean): void {
  if (currentGame) {
    currentGame.game?.forEach((players, i) => {
      const index: number = next ? i + 1 : i;
      const resData = {
        type: 'turn',
        data: JSON.stringify({
          currentPlayer: index,
        }),
        id: 0,
      };
      sendWsToChoseConnectsions(JSON.stringify(resData), [players.idPlayer]);
    });
  }
}
