import React from "react";
import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts.jsx";
import { Examples } from "./components/Tabs/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts concepts={CORE_CONCEPTS} />
        <Examples concepts={CORE_CONCEPTS} />
      </main>
    </>
  );
}

export default App;
