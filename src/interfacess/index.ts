import WebSocket from "ws";
export interface User {
  name: string;
  password: string;
  id:string;
}
export interface WSRes {
  type: string;
  data: string;
  id: number;
}

export interface DB {
  id: 0;
  rooms: room[];
  games: string[];
  users: User[];
}
interface room {
  roomId: number;
  roomUsers: {
    name: string | undefined;
    index: number;
  }[];
}
export interface CustomWebSocket extends WebSocket {
  userId: string; 
}