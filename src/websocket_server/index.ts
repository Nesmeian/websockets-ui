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
import terminalMessage from '../utils/consoleLogMessageCollor';
import { connectUsers } from '../dataBase/db';
const WS_PORT = Number(process.env.WS_PORT) || 3000;
const ws = new WebSocket.Server({ port: WS_PORT });

ws.on('listening', () => {
  console.log(`WebSocket start on port ${WS_PORT}`);
});
ws.on('connection', async (ws) => {
  console.log('connection start');
  connectUsers.add(ws);
  ws.on('message', (mes) => {
    const message: WSRes = JSON.parse(String(mes));
    if (message.type === 'reg') {
      regUser(message.data, ws);
      updateRoom(ws, true);
      updateWinners(ws);
    }
    if (message.type === 'create_room') {
      createRoom(ws);
      createGame(ws);
      updateRoom(ws, false);
      updateWinners(ws);
    }
    if (message.type === 'add_user_to_room') {
      addUser(ws, message.data);
    }
    console.log(`${terminalMessage.green}`, message);
  });
  ws.on('close', () => {
    connectUsers.delete(ws);
    console.log('connection stop');
  });
});
