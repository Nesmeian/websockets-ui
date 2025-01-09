import sendWsToChoseConnectsions from '..//..//..//..//utils/sendWsToChoseConnects';
import { ShipLocation } from '../../../../interfacess';
import collectCellsIfKilled from './collectCellsIfKilled';
export default function attackData(
  currentPlayer: string,
  status: string,
  target: ShipLocation,
  playersIds: string[],
  opponentBoard?: number[][],
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
  if (status === 'killed' && opponentBoard) {
    collectCellsIfKilled(playersIds, currentPlayer, opponentBoard, target);
    return;
  }
  sendWsToChoseConnectsions(resData, playersIds);
}
