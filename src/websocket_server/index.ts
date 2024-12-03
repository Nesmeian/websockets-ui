import WebSocket from 'ws';
import { takeUsers, archiveUser } from '../dataBase/index';
import { WSRes } from 'src/interfacess';
const WS_PORT = Number(process.env.WS_PORT) || 3000;
const ws = new WebSocket.Server({ port: WS_PORT });
const winners = {
  type: 'update_winners',
  data: JSON.stringify([]),
  id: 0,
};
const regMessage = {
  type: 'reg',
  data: JSON.stringify({
    name: 'Jack London',
    index: 2,
    error: false,
    errorText: 'jack',
  }),
  id: 0,
};
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
      archiveUser(message.data);
      ws.send(JSON.stringify(regMessage));
      console.log('reg Send');
      ws.send(JSON.stringify(updateReg));
      console.log('update Send');
      ws.send(JSON.stringify(winners));
      console.log('winners Send');
    }
  });
  ws.on('close', () => {
    console.log('connection stop');
  });
});

//!Send
