import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Result from "./components/Result";
import { INITIAL_INPUTS } from "./constants";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);
  const [errorMsg, setErrorMsg] = useState("");
  const results = calculateInvestmentResults(inputs);

  function handleChange(element, event) {
    setInputs({ ...inputs, [element]: event.target.value });

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
      <Result results={results} />
    </>
  );
}

export default App
