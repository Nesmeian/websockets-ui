import { Game } from 'src/interfacess';
import turn from '../response/turn';
import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
import terminalMessage from '..//../utils/consoleLogMessageCollor';
export default function startGame(currentGame: Game): void {
  if (currentGame.game) {
    if (currentGame.game.length > 1) {
      currentGame.game?.forEach((e, i) => {
        const resData = {
          type: 'start_game',
          data: JSON.stringify({
            ships: e.ships,
            currentPlayerIndex: e.idPlayer,
          }),
          id: 0,
        };
        sendWsToChoseConnectsions(JSON.stringify(resData), [e.idPlayer]);
        if (i + 1 === currentGame.game?.length) {
          console.log(e.idPlayer, 'Show id Player');
          turn(currentGame, e.idPlayer);
        }

        console.log(terminalMessage.blue, `StartGame ${resData}`);
      });
    }
  }
}
