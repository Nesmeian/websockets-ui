import { DB } from '..//../interfacess/index';
import WebSocket from 'ws';
const data: DB = {
  id: 0,
  rooms: [],
  games: [],
  users: [],
};
const connectUsers: Map<string, WebSocket> = new Map();
export { data, connectUsers };
