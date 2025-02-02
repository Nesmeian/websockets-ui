import checkShipLocation from './checkShipLocation';

export default function addSingleShips(board: string[][]): void {
  let littleShipsCount = 4;
  while (littleShipsCount > 0) {
    const randomX = Math.floor(Math.random() * board.length);
    const randomY = Math.floor(Math.random() * board.length);
    if (checkShipLocation(board, randomX, randomY)) {
      littleShipsCount--;
      board[randomY][randomX] = 'ship';
    }
  }
}
