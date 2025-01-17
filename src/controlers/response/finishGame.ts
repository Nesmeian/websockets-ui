import { Game } from '..//../interfacess/index';
import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
export default function finishGame(currentGame: Game, idPlayer: string): void {
  currentGame.players?.forEach((players) => {
    const resData = {
      type: 'finish',
      data: JSON.stringify({
        winPlayer: idPlayer,
      }),
      id: 0,
    };
    sendWsToChoseConnectsions(JSON.stringify(resData), [players.idPlayer]);
  });
}
