import { ShipLocation, ShipsData } from '../../../interfacess';

export default function checkAttack(
  opponentShips: ShipsData[],
  target: ShipLocation,
): string {
  console.log('I want to be a gangsta');
  const biteShip = opponentShips.find(
    ({ position }) => JSON.stringify(position) === JSON.stringify(target),
  );
  console.log(opponentShips);
  if (biteShip) {
    console.log('find Shipt');
    biteShip.length--;
    if (biteShip.length === 0) {
      console.log('kill ship');
      return 'killed';
    } else {
      console.log('shoot ship');
      return 'shot';
    }
  } else {
    console.log('miss ship');
    return 'miss';
  }
}
