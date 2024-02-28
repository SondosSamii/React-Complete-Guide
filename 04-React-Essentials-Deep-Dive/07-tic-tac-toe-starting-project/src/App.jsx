import { useState } from "react";
import { GameContainer } from "./components/GameContainer/GameContainer";
import Log from "./components/GameContainer/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(board, rowIndex, colIndex) {
    if (board[rowIndex][colIndex] === null) {
      setGameTurns((prevTurns) => [
        {
          player: prevTurns[0]?.player === "X" ? "O" : "X",
          square: { row: rowIndex, col: colIndex },
        },
        ...prevTurns,
      ]);
    }
  }

  return (
    <main>
      <GameContainer
        activePlayer={gameTurns[0]?.player === "X" ? "O" : "X"}
        turns={gameTurns}
        onPlay={handleSelectSquare}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
