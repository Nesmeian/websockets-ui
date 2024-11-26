import WebSocket from 'ws';
import { archiveUser, takeUsers } from '../dataBase/index';
const WS_PORT = Number(process.env.WS_PORT) || 3000;
const ws = new WebSocket.Server({ port: WS_PORT });
ws.on('listening', () => {
  console.log(`WebSocket start on port ${WS_PORT}`);
});
ws.on('connection', async (ws) => {
  console.log('connection start');
  const users = await takeUsers();
  console.log(users);
  await archiveUser({ username: 'jafkasv', password: 'fasfasf' });
  ws.on('message', (mes) => {
    console.log(JSON.parse(String(mes)));
  });
});
