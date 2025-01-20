import WebSocket from 'ws';

export interface DB {
  id: 0;
  rooms: room[];
  games: Game[];
  users: User[];
  wins: Wins[];
}

interface Wins {
  name: string;
  wins: number;
}
export interface Game {
  id: string;
  players?: Player[];
  turn?: string;
  attackInterval?: NodeJS.Timeout | null;
  singleGame: boolean;
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

export interface ShipsData {
  position: ShipLocation;
  direction: boolean;
  type: string;
  length: number;
}
export interface ShipLocation {
  x: number;
  y: number;
}
export interface Player {
  idPlayer: string;
  ships?: ShipsData[];
  board: string[][];
}
