import { v4 as randomIndex } from 'uuid';

export default function generateId(): string {
  return randomIndex();
}
