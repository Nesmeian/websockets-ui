import { DB } from '..//../interfacess/index';
import WebSocket from 'ws';
const data: DB = {
  id: 0,
  index: [],
  rooms: [],
  games: [],
  users: [],
};
const connectUsers: Set<WebSocket> = new Set();
export { data, connectUsers };
