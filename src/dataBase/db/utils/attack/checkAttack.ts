import { Game, Player, ShipLocation } from '../../../../interfacess';
import checkNearSells from './checkNearSells';
import attackData from './attackData';
import addShottedCells from './addShottedCells';
import turn from '../../../../controlers/response/turn';
import finishGame from '../../../../controlers/response/finishGame';
import addWiner from '../addWinner';
export default function checkAttack(
  opponent: Player,
  target: ShipLocation,
  currentPlayer: string,
  playersIds: string[],
  currentGame: Game,
): void {
  const opponentBoard = opponent.board;
  const { x, y } = target;
  if (opponentBoard[y][x] === 'ship') {
    let status;
    if (!checkNearSells(opponentBoard, target)) {
      const shottedShip = addShottedCells(opponentBoard, target);
      if (shottedShip) {
        status = 'killed';
        attackData(
          currentPlayer,
          status,
          target,
          playersIds,
          opponentBoard,
          shottedShip,
        );
        turn(currentGame, currentPlayer);
        if (!opponentBoard.flat().some((e) => e === 'ship')) {
          finishGame(currentGame, currentPlayer);
          addWiner(currentPlayer);
        }
      } else {
        status = 'shot';
        attackData(currentPlayer, status, target, playersIds, opponentBoard);
        turn(currentGame, currentPlayer);
      }
    } else {
      status = 'shot';
      attackData(currentPlayer, status, target, playersIds, opponentBoard);
      turn(currentGame, currentPlayer);
    }
  } else if (opponentBoard[y][x] == 'empty') {
    attackData(currentPlayer, 'miss', target, playersIds, opponentBoard);
    turn(currentGame, opponent.idPlayer);
  }
}
