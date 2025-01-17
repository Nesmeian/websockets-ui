import { data } from '..//../dataBase/db/index';
import resAttack from '../response/resAttack';
import createRandomTarget from '..//..//dataBase/db/utils/attack/createRandomTarget';
export default function randomAttack(message: string): void {
  const { gameId, indexPlayer } = JSON.parse(message);

  const { games } = data;
  const currentGame = games.find(({ id }) => id === gameId);
  if (!currentGame) {
    return;
  }
  const opponent = currentGame?.players?.find(
    ({ idPlayer }) => indexPlayer !== idPlayer,
  );
  if (!opponent) {
    return;
  }
  const currentPlayer: string = currentGame?.turn ?? '';
  if (currentPlayer != indexPlayer) {
    return;
  }
  const target = createRandomTarget(opponent.board);
  resAttack(target, currentPlayer, currentGame, opponent);
}
