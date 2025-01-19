import checkShipLocation from './checkShipLocation';
import { ShipLocation } from '..//..//..//..//interfacess/index';
export default function addMultiCellShip(
  board: string[][],
  ships: number,
  cells: number,
): void {
  let fourCellShip = ships;
  while (fourCellShip > 0) {
    const randomX = Math.floor(Math.random() * board.length);
    const randomY = Math.floor(Math.random() * board.length);
    const direction =
      Math.floor(Math.random() * 2) === 0 ? 'verticle' : 'horizontal';

    const ship: ShipLocation[] = [];
    for (let i = 0; i < cells; i++) {
      const newRandomY = direction === 'verticle' ? randomY + i : randomY;
      const newRandomX = direction === 'horizontal' ? randomX + i : randomX;
      if (
        newRandomY >= board.length ||
        newRandomX >= board.length ||
        newRandomY < 0 ||
        newRandomX < 0
      ) {
        break;
      }
      if (!checkShipLocation(board, newRandomX, newRandomY)) {
        break;
      }
      if (checkShipLocation(board, newRandomX, newRandomY)) {
        ship.push({ y: newRandomY, x: newRandomX });
      }
    }
    if (ship.length > cells - 1) {
      ship.forEach(({ x, y }) => (board[y][x] = 'ship'));
      fourCellShip--;
    }
  }
}
