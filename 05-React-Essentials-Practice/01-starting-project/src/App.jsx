import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Result from "./components/Result";
import { INITIAL_INPUTS } from "./constants";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);
  const results = calculateInvestmentResults(inputs);

  function handleChange(element, event) {
    setInputs({ ...inputs, [element]: event.target.value });
  }

  return (
    <>
      <Header />
      <Inputs inputs={inputs} onChange={handleChange} />
      <Result results={results} />
    </>
  );
}

export default App
