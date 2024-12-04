import { v4 as randomId } from 'uuid';
export default function idGenerator(): string {
  return randomId();
}
