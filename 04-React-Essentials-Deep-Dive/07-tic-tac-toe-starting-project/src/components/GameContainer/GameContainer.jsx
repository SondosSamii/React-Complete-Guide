import { GameBoard } from "./GameBoard";
import { GameOver } from "./GameOver";
import { Players } from "./Players";

export function GameContainer({ activePlayer, board, onPlay, winner }) {
  return (
    <div id="game-container">
      <Players activePlayer={winner ? null : activePlayer} />
      {winner !== null && <GameOver winner={winner} board={board} />}
      <GameBoard board={board} onPlay={onPlay} winner={winner} />
    </div>
  );
}
