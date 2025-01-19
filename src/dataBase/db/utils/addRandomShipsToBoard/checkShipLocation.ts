export default function checkShipLocation(
  board: string,
  x: number,
  y: number,
): boolean {
  const checkDirections = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < checkDirections.length; i++) {
    const newX = x + checkDirections[i][1];
    const newY = y + checkDirections[i][0];
    if (
      newX >= 0 &&
      newX < board[0].length &&
      newY >= 0 &&
      newY < board.length
    ) {
      if (board[newY][newX] === 'ship') {
        return false;
      }
    }
  }
  return true;
}
