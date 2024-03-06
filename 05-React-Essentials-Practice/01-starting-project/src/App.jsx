import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";
import { INITIAL_INPUTS } from "./constants";

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);

  const isInputValid =
    inputs.initialInvestment > 0 &&
    inputs.annualInvestment > 0 &&
    inputs.expectedReturn > 0 &&
    inputs.duration >= 1;

  function handleChange(element, event) {
    setInputs({ ...inputs, [element]: Number(event.target.value) });
  }

  return (
    <>
      <Header />
      <Inputs inputs={inputs} onChange={handleChange} />
      {isInputValid ? (
        <Results inputs={inputs} />
      ) : (
        <p className="center">You should enter a valid amount</p>
      )}
    </>
  );
}

export default App
