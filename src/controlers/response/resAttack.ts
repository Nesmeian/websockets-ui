import sendWsToChoseConnectsions from '..//../utils/sendWsToChoseConnects';
import { Game, ShipLocation, ShipsData } from '..//../interfacess';
import checkAttack from '..//../dataBase/db/utils/checkAttack';
export default function resAttack(
  target: ShipLocation,
  currentPlayer: string,
  currentGame: Game,
  opponentShips: ShipsData[],
): void {
  const status = checkAttack(opponentShips, target);
  const resData = {
    type: 'attack',
    data: JSON.stringify({
      position: {
        x: target.x,
        y: target.y,
      },
      currentPlayer: currentPlayer,
      status: status,
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
