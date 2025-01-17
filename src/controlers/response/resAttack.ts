import { Game, Player, ShipLocation } from '..//../interfacess';
import checkAttack from '../../dataBase/db/utils/attack/checkAttack';
export default function resAttack(
  target: ShipLocation,
  currentPlayer: string,
  currentGame: Game,
  opponent: Player,
): void {
  const playersIds = currentGame?.players?.map(({ idPlayer }) => idPlayer);
  if (!playersIds) {
    console.error('cant find players Ids');
    return;
  }
  checkAttack(opponent, target, currentPlayer, playersIds, currentGame);
}
