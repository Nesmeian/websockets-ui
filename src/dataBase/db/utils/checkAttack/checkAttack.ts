import { Player, ShipLocation } from '../../../../interfacess';
import checkNearSells from './checkNearSells';
export default function checkAttack(
  opponent: Player,
  target: ShipLocation,
): string {
  const opponentBoard = opponent.board;
  const { x, y } = target;
  if (opponentBoard[y][x] === 1) {
    if (!checkNearSells(opponentBoard, target)) {
      return 'killed';
    } else {
      return 'shot';
    }
  } else {
    return 'miss';
  }
  // if (biteShip) {
  //   console.log('find Shipt');
  //   biteShip.length--;
  //   if (biteShip.length === 0) {
  //     console.log('kill ship');
  //     return 'killed';
  //   } else {
  //     console.log('shoot ship');
  //     return 'shot';
  //   }
  // } else {
  //   console.log('miss ship');
  //   return 'miss';
  // }
  return '';
}
