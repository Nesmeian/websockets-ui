export interface User {
  username: string;
  password: string;
}
export interface WSRes {
  type: string;
  data: string;
  id: number;
}
export interface DB {
  id: string[];
  index: number[];
  room: string[];
}
