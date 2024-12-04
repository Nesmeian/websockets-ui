import WebSocket from 'ws';
import { WSRes } from 'src/interfacess';
import { regUser } from '../controlers/index';
const WS_PORT = Number(process.env.WS_PORT) || 3000;
const ws = new WebSocket.Server({ port: WS_PORT });

const updateReg = {
  type: 'update_room',
  data: JSON.stringify([]),
  id: 0,
};
ws.on('listening', () => {
  console.log(`WebSocket start on port ${WS_PORT}`);
});
ws.on('connection', async (ws) => {
  console.log('connection start');
  ws.on('message', (mes) => {
    const message: WSRes = JSON.parse(String(mes));
    if (message.type === 'reg') {
      regUser(message.data, ws);
      // console.log('update Send');
      // console.log('winners Send');
    }
  });
  ws.on('close', () => {
    console.log('connection stop');
  });
});

//!Send
