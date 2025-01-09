import sendWsToChoseConnectsions from '..//..//..//..//utils/sendWsToChoseConnects';
import { ShipLocation } from '../../../../interfacess';

export default function collectCellsIfKilled(
  playersIds: string[],
  currentPlayer: string,
  board: number[][],
  target: ShipLocation,
): void {
  const { x, y } = target;
  const rows = board.length;
  const cols = board[0].length;
  const result = [];
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dy === 0 && dx === 0) continue;

      const newY = y + dy;
      const newX = x + dx;

      if (newY >= 0 && newY < rows && newX >= 0 && newX < cols) {
        if (board[newY][newX] !== 1) {
          result.push({ y: newY, x: newX });
        }
      }
    }
  }
  result.forEach(({ x, y }) => {
    const resData = JSON.stringify({
      type: 'attack',
      data: JSON.stringify({
        position: {
          x: x,
          y: y,
        },
        currentPlayer: currentPlayer,
        status: 'miss',
      }),
    });
    sendWsToChoseConnectsions(resData, playersIds);
  });
  const resData = JSON.stringify({
    type: 'attack',
    data: JSON.stringify({
      position: {
        x: x,
        y: y,
      },
      currentPlayer: currentPlayer,
      status: 'killed',
    }),
  });
  sendWsToChoseConnectsions(resData, playersIds);
}
