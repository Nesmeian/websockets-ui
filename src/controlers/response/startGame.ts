import { CustomWebSocket, Game } from 'src/interfacess';
import turn from '../response/turn';
import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
export default function startGame(
  ws: CustomWebSocket,
  currentGame: Game,
): void {
  if (currentGame.game) {
    if (currentGame.game.length > 1) {
      currentGame.game?.forEach((e, i) => {
        const resData = {
          type: 'start_game',
          data: JSON.stringify({
            ships: e.ships,
            currentPlayerIndex: i + 1,
          }),
          id: 0,
        };
        console.log(JSON.parse(resData.data));
        sendWsToChoseConnectsions(JSON.stringify(resData), [e.idPlayer]);
        if (i + 1 === currentGame.game?.length) {
          turn(ws, currentGame);
        }
      });
    }
  }
}
