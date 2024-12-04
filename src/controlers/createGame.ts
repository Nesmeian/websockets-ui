import messageColor from '../utils/consoleLogMessageCollor';
import WebSocket from 'ws';
// import db from '../dataBase/db/index';
export default function createGame(ws: WebSocket): void {
  //   const { id, index } = db;
  const createGameReg = {
    type: 'create_game',
    data: JSON.stringify({
      idGame: 1,
      idPlayer: 1,
    }),
    id: 0,
  };
  console.log(
    `${messageColor.blue}`,
    `create game ${JSON.stringify(createGameReg)}`,
  );
  ws.send(JSON.stringify(createGameReg));
}
