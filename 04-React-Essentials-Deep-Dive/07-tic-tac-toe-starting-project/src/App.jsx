import { useState } from "react";
import { GameContainer } from "./components/GameContainer/GameContainer";
import Log from "./components/GameContainer/Log";

function App() {
    const [gameTurns, setGameTurns] = useState([]);

  return (
    <main>
      <GameContainer onPlay={setGameTurns} />
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
