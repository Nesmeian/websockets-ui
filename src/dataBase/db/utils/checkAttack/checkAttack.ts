import { Player, ShipLocation } from '../../../../interfacess';
import checkNearSells from './checkNearSells';
import attackData from './attackData';
export default function checkAttack(
  opponent: Player,
  target: ShipLocation,
  currentPlayer: string,
  playersIds: string[],
): void {
  const opponentBoard = opponent.board;
  const { x, y } = target;
  if (opponentBoard[y][x] === 1) {
    if (!checkNearSells(opponentBoard, target)) {
      attackData(currentPlayer, 'killed', target, playersIds, opponentBoard);
    } else {
      attackData(currentPlayer, 'shot', target, playersIds);
    }
  } else {
    attackData(currentPlayer, 'miss', target, playersIds);
  }
}
