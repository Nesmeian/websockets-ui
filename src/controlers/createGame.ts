import WebSocket from 'ws';
// import db from '../dataBase/db/index';
export default function createGame(ws: WebSocket): void {
  //   const { id, index } = db;
  const createGame = {
    type: 'create_game',
    data: JSON.stringify({
      idGame: 1,
      idPlayer: 1,
    }),
    id: 0,
  };
  ws.send(JSON.stringify(createGame));
}
