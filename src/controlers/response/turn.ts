import sendWsToChoseConnectsions from '..//..//utils/sendWsToChoseConnects';
import { Game } from '../../interfacess';
import terminalMessage from '..//../utils/consoleLogMessageCollor';
export default function turn(currentGame: Game, id: string): void {
  if (currentGame) {
    currentGame.game?.forEach((players) => {
      const resData = {
        type: 'turn',
        data: JSON.stringify({
          currentPlayer: id,
        }),
        id: 0,
      };
      sendWsToChoseConnectsions(JSON.stringify(resData), [players.idPlayer]);
      console.log(terminalMessage.blue, `Turn ${resData}`);
    });
  }
}
