import { useState } from "react";
import { GameContainer } from "./components/GameContainer/GameContainer";
import Log from "./components/GameContainer/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(board, rowIndex, colIndex) {
    if (board[rowIndex][colIndex] === null) {
      setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
      setGameTurns([
        { player: activePlayer, square: { row: rowIndex, col: colIndex } },
        ...gameTurns,
      ]);
    }
  }

  return (
    <main>
      <GameContainer activePlayer={activePlayer} turns={gameTurns} onPlay={handleSelectSquare} />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
