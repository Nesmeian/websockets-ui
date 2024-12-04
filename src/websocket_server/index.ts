import WebSocket from 'ws';
import { WSRes } from 'src/interfacess';
import {
  addUser,
  createGame,
  createRoom,
  regUser,
  updateRoom,
  updateWinners,
} from '../controlers/index';
const WS_PORT = Number(process.env.WS_PORT) || 3000;
const ws = new WebSocket.Server({ port: WS_PORT });

ws.on('listening', () => {
  console.log(`WebSocket start on port ${WS_PORT}`);
});
ws.on('connection', async (ws) => {
  console.log('connection start');
  ws.on('message', (mes) => {
    const message: WSRes = JSON.parse(String(mes));
    if (message.type === 'reg') {
      regUser(message.data, ws);
      updateRoom(ws);
      updateWinners(ws);
    }
    if (message.type === 'create_room') {
      createRoom(ws);
      addUser(ws);
      createGame(ws);
      console.log('jack');
    }
    console.log(message);
  });
  ws.on('close', () => {
    console.log('connection stop');
  });
});

//!Send
