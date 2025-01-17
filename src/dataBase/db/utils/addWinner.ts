import { updateWinners } from '..//..//..//controlers';
import { data } from '../index';
export default function addWinner(idPlayer: string): void {
  const { users, wins } = data;
  const player = users.find(({ id }) => id === idPlayer);
  const winPlayer = wins.find(({ name }) => name === player?.name);
  if (winPlayer === undefined && player) {
    wins.push({ name: player?.name, wins: 1 });
  } else if (winPlayer) {
    winPlayer.wins++;
  }
  updateWinners();
}
