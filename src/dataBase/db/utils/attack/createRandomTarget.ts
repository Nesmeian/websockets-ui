export default function createRandomTarget(board: string[][]): {
  x: number;
  y: number;
} {
  let validTarget = false;
  const boardSize = board.length;
  let x: number = Math.floor(Math.random() * boardSize);
  let y: number = Math.floor(Math.random() * boardSize);

  while (!validTarget) {
    if (
      board[y][x] === 'killed' ||
      board[y][x] === 'shot' ||
      board[y][x] === 'miss'
    ) {
      x = Math.floor(Math.random() * boardSize);
      y = Math.floor(Math.random() * boardSize);
    } else {
      validTarget = true;
    }
  }

  return { x: x, y: y };
}
