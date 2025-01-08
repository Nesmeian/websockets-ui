import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
import { Game, ShipLocation } from '..//../interfacess';

export default function resAttack(
  target: ShipLocation,
  currentPlayer: string,
  currentGame: Game,
): void {
  const resData = {
    type: 'attack',
    data: JSON.stringify({
      position: {
        x: target.x,
        y: target.y,
      },
      currentPlayer: currentPlayer,
      status: 'shot',
    }),
  };
  console.log(target, 'target');
  const playersIds = currentGame?.players?.map(({ idPlayer }) => idPlayer);
  if (!playersIds) {
    console.error('cant find players Ids');
    return;
  }
  console.log(resData);
  sendWsToChoseConnectsions(JSON.stringify(resData), playersIds);
}
