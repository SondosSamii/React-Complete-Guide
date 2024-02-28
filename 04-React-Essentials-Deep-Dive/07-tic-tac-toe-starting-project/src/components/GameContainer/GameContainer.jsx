import { GameBoard } from "./GameBoard";
import { Players } from "./Players";

export function GameContainer({ activePlayer, turns, onPlay }) {
  return (
    <div id="game-container">
      <Players activePlayer={activePlayer} />
      <GameBoard turns={turns} onPlay={onPlay} />
    </div>
  );
}
