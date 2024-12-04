import { DB } from '../interfacess/index';
import idGenerator from './generateId';
export default function increaseAmounts(db: DB): void {
  const { id, index } = db;
  index.push(1);
  id.push(idGenerator());
}
