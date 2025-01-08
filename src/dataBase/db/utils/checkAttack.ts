import { ShipLocation, ShipsData } from '../../../interfacess';

export default function checkAttack(
  opponentShips: ShipsData[],
  target: ShipLocation,
): string {
  const biteShip = opponentShips.find(
    ({ position }) => JSON.stringify(position) === JSON.stringify(target),
  );
  if (biteShip) {
    biteShip.length--;
    if (biteShip.length === 0) {
      return 'killed';
    } else {
      return 'shot';
    }
  } else {
    return 'miss';
  }
}
