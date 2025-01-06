import startGame from '../response/startGame';
// import { data } from '..//../dataBase/db';
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
  // const { games } = data;
  const game: Player[] = [];
  const shipsData: AddShipsData = JSON.parse(messageData);
  const player: Player = {
    indexPlayer: game.length,
    ships: shipsData.ships.map((ship) => ship),
  };
  game.push(player);
  console.log('I want to check id', ws.userGameId);
}
