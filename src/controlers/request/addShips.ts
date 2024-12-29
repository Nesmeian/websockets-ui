import WebSocket from 'ws';
import startGame from '../response/startGame';
import { data } from '..//../dataBase/db';
import { AddShipsData } from '..//..//interfacess/index';
export default function addShips(ws: WebSocket, messageData: string): void {
  startGame(ws);
  const { games } = data;
  const player = {
    indexPlayer: 1,
    ships: [],
  };
  const shipsData: AddShipsData = JSON.parse(messageData);
  console.log(shipsData.ships);
  console.log(shipsData);
}
