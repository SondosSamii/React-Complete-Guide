import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import Log from "./components/Log";
import { getActivePlayer, getGameBoard, getWinner } from "./helpers/global";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);

  const gameBoard = getGameBoard(gameTurns);

  const winnerSymbol = getWinner(gameBoard);

  const hasDraw = gameTurns.length >= 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      { player: getActivePlayer(prevTurns), square: { row: rowIndex, col: colIndex } },
      ...prevTurns,
    ]);
  }

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main>
      <GameContainer
        activePlayer={activePlayer}
        board={gameBoard}
        turns={gameTurns}
        onPlay={handleSelectSquare}
        winnerSymbol={winnerSymbol}
        hasDraw={hasDraw}
        onRematch={handleRematch}
      />
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
