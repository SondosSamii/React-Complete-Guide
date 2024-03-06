import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";
import { INITIAL_INPUTS } from "./constants";

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(element, event) {
    setInputs({ ...inputs, [element]: Number(event.target.value) });

    if (event.target.value < 0 || (element === "duration" && event.target.value < 1)) {
      setErrorMsg("You should enter a valid amount");
    } else {
      setErrorMsg("");
    }
  }

  return (
    <>
      <Header />
      <Inputs inputs={inputs} onChange={handleChange} errorMsg={errorMsg} />
      {!errorMsg && <Results inputs={inputs} />}
    </>
  );
}

export default App
