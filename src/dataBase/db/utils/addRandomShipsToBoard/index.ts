import addMultiCellShip from './addMultiCellShip';
import addSingleShips from './addSingleShips';

export default function addRandomShipsToBoard(board: string[][]): void {
  addMultiCellShip(board, 1, 4);
  addMultiCellShip(board, 3, 2);
  addMultiCellShip(board, 2, 3);
  addSingleShips(board);
}
