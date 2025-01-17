import sendWsToChoseConnectsions from '../../../../utils/sendWsToChoseConnects';
import { ShipLocation } from '../../../../interfacess';
import collectCellsIfKilled from './collectCellsIfKilled';
export default function attackData(
  currentPlayer: string,
  status: string,
  target: ShipLocation,
  playersIds: string[],
  opponentBoard: string[][],
  shottedShip?: ShipLocation[],
): void {
  const { x, y } = target;
  const resData = JSON.stringify({
    type: 'attack',
    data: JSON.stringify({
      position: {
        x: x,
        y: y,
      },
      currentPlayer: currentPlayer,
      status: status,
    }),
  });
  if (status === 'killed' && shottedShip) {
    collectCellsIfKilled(playersIds, currentPlayer, opponentBoard, shottedShip);
    return;
  }
  if (status === 'shot') {
    opponentBoard[y][x] = 'shot';
  }
  if (status === 'miss') {
    if (opponentBoard[y][x] === 'empty') {
      opponentBoard[y][x] = 'miss';
    }
  }
  sendWsToChoseConnectsions(resData, playersIds);
}
