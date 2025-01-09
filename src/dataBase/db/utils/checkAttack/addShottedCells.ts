import { ShipLocation } from '../../../../interfacess';

export default function shottedShip(
  opponentBoard: string[][],
  target: ShipLocation,
): ShipLocation[] | false {
  const { x, y } = target;
  const ship: ShipLocation[] = [];

  if (opponentBoard[y][x] !== 'ship') {
    return false;
  }

  opponentBoard[y][x] = 'shot';
  ship.push({ x, y });

  const checkDirection = (dx: number, dy: number) => {
    let newX = x + dx;
    let newY = y + dy;

    while (
      newX >= 0 &&
      newX < opponentBoard[0].length &&
      newY >= 0 &&
      newY < opponentBoard.length
    ) {
      if (opponentBoard[newY][newX] === 'empty') {
        break; // Достигли пустой клетки
      }
      if (opponentBoard[newY][newX] === 'ship') {
        return false; // Найдена часть корабля, которая не подбита
      }
      if (opponentBoard[newY][newX] === 'shot') {
        ship.push({ x: newX, y: newY }); // Добавляем подбитую часть корабля
      }
      newX += dx;
      newY += dy;
    }
    return true; // Если достигли границы или пустой клетки
  };

  // Проверяем все направления
  checkDirection(-1, 0); // Влево
  checkDirection(1, 0); // Вправо
  checkDirection(0, -1); // Вверх
  checkDirection(0, 1); // Вниз

  // Проверяем, потоплен ли корабль
  let isSunk = true;
  for (const part of ship) {
    if (opponentBoard[part.y][part.x] === 'ship') {
      isSunk = false; // Найдена часть корабля, которая не подбита
      break;
    }
  }
  console.log(ship);
  return isSunk ? ship : false;
}
