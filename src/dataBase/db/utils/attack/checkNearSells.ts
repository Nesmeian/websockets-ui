import { ShipLocation } from '../../../../interfacess';
export default function checkNearSells(
  opponentBoard: string[][],
  target: ShipLocation,
): boolean {
  const { x, y } = target;
  const rows = opponentBoard.length;
  const cols = opponentBoard[0].length;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dy === 0 && dx === 0) continue;

      const newY = y + dy;
      const newX = x + dx;

      if (newY >= 0 && newY < rows && newX >= 0 && newX < cols) {
        if (opponentBoard[newY][newX] === 'ship') {
          return true;
        }
      }
    }
  }
  return false;
}
