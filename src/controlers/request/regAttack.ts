import { ShipsData } from '..//../interfacess';
import { data } from '..//../dataBase/db/index';
import resAttack from '../response/resAttack';
export default function regAttack(message: string): void {
  const { gameId, indexPlayer, x, y } = JSON.parse(message);
  const target = { x: x, y: y };
  const { games } = data;
  const currentGame = games.find(({ id }) => id === gameId);
  if (!currentGame) {
    return;
  }
  const opponent = currentGame?.players?.find(
    ({ idPlayer }) => indexPlayer !== idPlayer,
  );
  const currentPlayer: string = currentGame?.turn ?? '';
  const opponentShips: ShipsData[] = opponent?.ships ?? [];
  resAttack(target, currentPlayer, currentGame);
}
