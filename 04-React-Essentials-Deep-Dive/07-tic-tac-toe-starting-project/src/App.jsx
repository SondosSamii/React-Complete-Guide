import { useState } from "react";
import { GameContainer } from "./components/GameContainer/GameContainer";
import Log from "./components/GameContainer/Log";

function getActivePlayer(turns) {
  return turns[0]?.player === "X" ? "O" : "X";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(board, rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      { player: getActivePlayer(prevTurns), square: { row: rowIndex, col: colIndex } },
      ...prevTurns,
    ]);
  }

  return (
    <main>
      <GameContainer
        activePlayer={getActivePlayer(gameTurns)}
        turns={gameTurns}
        onPlay={handleSelectSquare}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
