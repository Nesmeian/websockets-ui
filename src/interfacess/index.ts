import WebSocket from 'ws';

export interface DB {
  id: 0;
  rooms: room[];
  games: Game[];
  users: User[];
}

export interface Game {
  id: string;
  game?: Player[];
}

export interface User {
  name: string;
  password: string;
  id: string;
}
export interface WSRes {
  type: string;
  data: string;
  id: number;
}

interface room {
  roomId: string;
  roomUsers: {
    name: string | undefined;
    index: number;
  }[];
}
export interface CustomWebSocket extends WebSocket {
  userId: string;
  userGameId?: string;
}
export interface AddShipsData {
  gameId: number;
  ships: ShipsData[];
}

interface ShipsData {
  position: ShipLocation;
  direction: boolean;
  type: string;
  length: number;
}
interface ShipLocation {
  x: number;
  y: number;
}
export interface Player {
  idPlayer: string;
  ships: ShipsData[];
}
