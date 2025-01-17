import { ShipLocation } from '../../../../interfacess';

export default function addShottedShip(
  opponentBoard: string[][],
  target: ShipLocation,
): ShipLocation[] | false {
  const { x, y } = target;
  const ship: ShipLocation[] = [];
  ship.push({ x, y });
  opponentBoard[y][x] = 'shot';

  let count = 1;
  while (true) {
    const newX = x - count;
    if (newX < 0) break;
    if (opponentBoard[y][newX] === 'shot') {
      ship.push({ y, x: newX });
    } else if (opponentBoard[y][newX] === 'ship') {
      return false;
    } else {
      break;
    }
    count++;
  }

  count = 1;
  while (true) {
    const newX = x + count;
    if (newX >= opponentBoard[0].length) break;
    if (opponentBoard[y][newX] === 'shot') {
      ship.push({ y, x: newX });
    } else if (opponentBoard[y][newX] === 'ship') {
      return false;
    } else {
      break;
    }
    count++;
  }

  count = 1;
  while (true) {
    const newY = y - count;
    if (newY < 0) break;
    if (opponentBoard[newY][x] === 'shot') {
      ship.push({ y: newY, x });
    } else if (opponentBoard[newY][x] === 'ship') {
      return false;
    } else {
      break;
    }
    count++;
  }

  count = 1;
  while (true) {
    const newY = y + count;
    if (newY >= opponentBoard.length) break;
    if (opponentBoard[newY][x] === 'shot') {
      ship.push({ y: newY, x });
    } else if (opponentBoard[newY][x] === 'ship') {
      return false;
    } else {
      break;
    }
    count++;
  }
  return ship.length > 0 ? ship : false;
}
