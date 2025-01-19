import addMultiCellShip from './addMultiCellShip';
import addSingleShips from './addSingleShips';

export default function addRandomShipsToBoard(): string[][] {
  const length = 10;
  const board = Array.from({ length }, () => Array(length).fill('empty'));
  addMultiCellShip(board, 1, 4);
  addMultiCellShip(board, 3, 2);
  addMultiCellShip(board, 2, 3);
  addSingleShips(board);
  return board;
}
