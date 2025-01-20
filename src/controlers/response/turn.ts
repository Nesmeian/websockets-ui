import sendWsToChoseConnectsions from '..//..//utils/sendWsToChoseConnects';
import { Game } from '../../interfacess';
import terminalMessage from '..//../utils/consoleLogMessageCollor';
import randomAttack from '../request/randomAttack';
export default function turn(currentGame: Game, id: string): void {
  if (currentGame) {
    currentGame.players?.forEach((players) => {
      const resData = {
        type: 'turn',
        data: JSON.stringify({
          currentPlayer: id,
        }),
        id: 0,
      };
      if (currentGame.singleGame && currentGame.players) {
        const opponentPlayer = currentGame.players[1].idPlayer;
        const regAttack = JSON.stringify({
          gameId: currentGame.id,
          indexPlayer: opponentPlayer,
        });

        if (opponentPlayer === id) {
          // Проверяем, установлен ли интервал
          if (!currentGame.attackInterval) {
            currentGame.attackInterval = setInterval(
              () => randomAttack(regAttack),
              2000,
            );
          }
        } else {
          // Останавливаем интервал, если он установлен
          if (currentGame.attackInterval) {
            clearInterval(currentGame.attackInterval);
            currentGame.attackInterval = null; // Сбрасываем переменную
          }
        }
      }
      sendWsToChoseConnectsions(JSON.stringify(resData), [players.idPlayer]);
      currentGame.turn = id;
      console.log(terminalMessage.blue, `Turn ${JSON.stringify(resData)}`);
    });
  }
}
