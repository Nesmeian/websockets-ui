import { data } from '..//../dataBase/db/index';
export default function regAttack(message: string): void {
  const regGameId = JSON.parse(message).gameId;
  const regPlayerId = JSON.parse(message).indexPlayer;
  const { games } = data;
  const currentGame = games.find(({ id }) => id === regGameId);
  const opponent = currentGame?.players?.find(
    ({ idPlayer }) => regPlayerId !== idPlayer,
  );
  const currentTurn = currentGame?.turn;
  console.log(opponent, 'opponent');
  console.log(currentGame, 'current Game');
  console.log(currentTurn, 'current turn');
}
