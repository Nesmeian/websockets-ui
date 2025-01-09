import startGame from '../response/startGame';
import { data } from '..//../dataBase/db';
import {
  AddShipsData,
  CustomWebSocket,
  Game,
  Player,
} from '..//..//interfacess/index';
import addShipsToBoard from '..//../dataBase/db/utils/addShipsToBoard';
export default function addShips(
  ws: CustomWebSocket,
  messageData: string,
): void {
  const { games } = data;
  const currentGame = games.find(({ id }) => id === ws.userGameId);
  const shipsData: AddShipsData = JSON.parse(messageData);
  const length = 10;
  const board = Array.from({ length }, () => Array(length).fill('empty'));
  shipsData.ships.forEach((ship) => addShipsToBoard(board, ship));
  const player: Player = {
    idPlayer: ws.userId,
    ships: shipsData.ships.map((ship) => ship),
    board: board,
  };
  (currentGame?.players as Player[]).push(player);
  console.log(player.board, 'check board');
  startGame(currentGame as Game);
}
