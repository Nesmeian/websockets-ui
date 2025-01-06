import startGame from '../response/startGame';
import { data } from '..//../dataBase/db';
import {
  AddShipsData,
  CustomWebSocket,
  Player,
} from '..//..//interfacess/index';
export default function addShips(
  ws: CustomWebSocket,
  messageData: string,
): void {
  startGame(ws);
  const { games } = data;
  const currentGame = games.find(({ id }) => id === ws.userGameId);
  const shipsData: AddShipsData = JSON.parse(messageData);
  const player: Player = {
    idPlayer: ws.userId,
    ships: shipsData.ships.map((ship) => ship),
  };
  (currentGame?.game as Player[]).push(player);
  console.log(games, 'Games');
  console.log(currentGame, 'Game');
}
