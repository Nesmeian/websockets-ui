export interface User {
  name: string;
  password: string;
}
export interface WSRes {
  type: string;
  data: string;
  id: number;
}
export interface DB {
  id: 0;
  index: string[];
  rooms: room[];
  games: string[];
  users: User[];
}
interface room {
  roomId: number;
  roomUsers: {
    name: string;
    index: number;
  }[];
}
