import React from "react";
import Header from "./components/Header/Header";
import Concepts from "./components/Concepts/Concepts";
import { ConceptsData } from "./components/Concepts/ConceptsData";

function App() {
  return (
    <div>
      <Header />
      <Concepts concepts={ConceptsData} />
    </div>
  );
}

export default App;
