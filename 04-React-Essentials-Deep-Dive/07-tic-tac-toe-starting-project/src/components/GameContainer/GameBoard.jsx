const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard({ turns, onPlay }) {
  const board = initialBoard;

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;
    board[row][col] = player;
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onPlay(board, rowIndex, colIndex)}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
