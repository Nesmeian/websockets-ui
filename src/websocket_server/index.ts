import WebSocket from 'ws';
import { CustomWebSocket, WSRes } from 'src/interfacess';
import {
  addShips,
  addUser,
  createRoom,
  regUser,
  updateRoom,
  updateWinners,
} from '../controlers/index';

import terminalMessage from '../utils/consoleLogMessageCollor';
import deleteWsUser from '../utils/deleteUser';

const WS_PORT = Number(process.env.WS_PORT) || 3000;
const ws = new WebSocket.Server({ port: WS_PORT });

ws.on('listening', () => {
  console.log(`WebSocket start on port ${WS_PORT}`);
});
ws.on('connection', async (ws: CustomWebSocket) => {
  console.log('connection start');
  ws.on('message', (mes) => {
    const message: WSRes = JSON.parse(String(mes));
    console.log(`${terminalMessage.green}`, message);
    if (message.type === 'reg') {
      regUser(message.data, ws);
      updateRoom(ws);
      updateWinners();
    }
    if (message.type === 'create_room') {
      createRoom(ws);
    }
    if (message.type === 'add_user_to_room') {
      addUser(ws, message.data);
    }
    if (message.type === 'add_ships') {
      addShips(ws, message.data);
    }
    console.log(message.type);
  });
  ws.on('close', () => {
    deleteWsUser(ws, ws.userId);
  });
});
