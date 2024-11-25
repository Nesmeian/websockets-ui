import { httpServer } from './http_server/index';
import { config } from 'dotenv';
config();
const HTTP_PORT: number = Number(process.env.HTTP_PORT);
// const WS_PORT: number = Number(process.env.WS_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);
// console.log(`Start static http server on the ${WS_PORT} port!`);
httpServer.listen(HTTP_PORT);
