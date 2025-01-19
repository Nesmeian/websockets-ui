import checkShipLocation from './checkShipLocation';

export default function addLittleShips(board): void {
  let littleShipsCount = 4;
  while (littleShipsCount > 0) {
    const randomX = Math.floor(Math.random() * length);
    const randomY = Math.floor(Math.random() * length);
    if (checkShipLocation(board, randomX, randomY)) {
      littleShipsCount--;
      board[randomY][randomX] = 'ship';
    }
  }
}
