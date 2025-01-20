import { Game, Player } from 'src/interfacess';
import turn from '../response/turn';
import addRandomShipsToBoard from '..//..//dataBase/db/utils/addRandomShipsToBoard';
import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
import terminalMessage from '..//../utils/consoleLogMessageCollor';
import generateId from '..//../utils/generateId';
export default function startGame(currentGame: Game): void {
  if (currentGame.players) {
    if (currentGame.singleGame) {
      const bot: Player = {
        idPlayer: generateId(),
        ships: currentGame.players[0].ships,
        board: addRandomShipsToBoard(),
      };
      currentGame.players.push(bot);
      currentGame.players?.forEach((e) => {
        const resData = JSON.stringify({
          type: 'start_game',
          data: JSON.stringify({
            ships: e.ships,
            currentPlayerIndex: e.idPlayer,
          }),
          id: 0,
        });
        sendWsToChoseConnectsions(resData, [e.idPlayer]);

        console.log(terminalMessage.blue, `StartGame ${resData}`);
      });
      turn(currentGame, currentGame.players[0].idPlayer);
      return;
    }

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
