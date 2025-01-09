import { ShipsData } from '../../../interfacess';

export default function addShipsToBoard(
  matrix: string[][],
  ship: ShipsData,
): string[][] {
  const y = ship.position.y;
  const x = ship.position.x;
  if (ship.length > 1) {
    if (!ship.direction) {
      let count = 0;
      while (count < ship.length) {
        count++;
        matrix[y][x - 1 + count] = 'ship';
      }
    } else {
      let count = 0;
      while (count < ship.length) {
        count++;
        matrix[y - 1 + count][x] = 'ship';
      }
    }
  } else {
    matrix[ship.position.y][ship.position.x] = 'ship';
  }
  return matrix;
}
