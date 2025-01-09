import { ShipsData } from '../../../interfacess';

export default function addShipsToBoard(
  matrix: number[][],
  ship: ShipsData,
): number[][] {
  const y = ship.position.y;
  const x = ship.position.x;
  if (ship.length > 1) {
    if (!ship.direction) {
      let count = 0;
      while (count < ship.length) {
        count++;
        matrix[y][x - 1 + count] = 1;
      }
    } else {
      let count = 0;
      while (count < ship.length) {
        count++;
        matrix[y - 1 + count][x] = 1;
      }
    }
  } else {
    matrix[ship.position.y][ship.position.x] = 1;
  }
  return matrix;
}
