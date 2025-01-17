export default function createRandomTarget(board: string[][]): {
  x: number;
  y: number;
} {
  let validTarget = false;
  let x: number = 0,
    y: number = 0;
  const boardSize = board.length;

  while (!validTarget) {
    x = Math.floor(Math.random() * boardSize);
    y = Math.floor(Math.random() * boardSize);

    if (
      board[y][x] === 'killed' ||
      board[y][x] === 'shot' ||
      board[y][x] === 'miss'
    ) {
      console.log(`Cell [${y}, ${x}] is not valid.`);
    } else {
      validTarget = true;
    }
  }

  return { x: x, y: y };
}
