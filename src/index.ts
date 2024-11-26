import { httpServer } from './http_server/index';
import { config } from 'dotenv';
import './websocket_server';
config();
const HTTP_PORT: number = Number(process.env.HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
