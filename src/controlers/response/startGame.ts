import { Game } from 'src/interfacess';
import turn from '../response/turn';
import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
import terminalMessage from '..//../utils/consoleLogMessageCollor';
export default function startGame(currentGame: Game): void {
  if (currentGame.singleGame) {
    console.log(1);
  }
  if (currentGame.players) {
    if (currentGame.players.length > 1) {
      currentGame.players?.forEach((e, i) => {
        const resData = JSON.stringify({
          type: 'start_game',
          data: JSON.stringify({
            ships: e.ships,
            currentPlayerIndex: e.idPlayer,
          }),
          id: 0,
        });
        sendWsToChoseConnectsions(resData, [e.idPlayer]);
        if (i + 1 === currentGame.players?.length) {
          turn(currentGame, e.idPlayer);
        }

        console.log(terminalMessage.blue, `StartGame ${resData}`);
      });
    }
  }
}
