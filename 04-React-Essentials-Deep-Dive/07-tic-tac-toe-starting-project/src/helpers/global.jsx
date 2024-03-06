import { WINNING_COMBINATIONS } from "../winning-combinations.js";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function getActivePlayer(turns) {
  return turns[0]?.player === "X" ? "O" : "X";
}

export function getWinner(gameBoard) {
  let winnerSymbol = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winnerSymbol = firstSquare;
    }
  }
  return winnerSymbol;
}

export function getGameBoard(gameTurns) {
  const gameBoard = [...initialBoard.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}
