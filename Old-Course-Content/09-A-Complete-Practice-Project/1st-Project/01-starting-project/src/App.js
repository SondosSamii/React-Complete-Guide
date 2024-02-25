import React, { useState } from "react";
import InvestmentCalculator from "./components/InvestmentCalculator/InvestmentCalculator";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
      });
    }
  }

  return (
    <div>
      <Header />

      <InvestmentCalculator onCalculate={calculateHandler} />

      {userInput ? (
        <ResultsTable
          tableData={yearlyData}
          initialSavings={+userInput["current-savings"]}
        />
      ) : (
        <h2 style={{ textAlign: "center" }}>No Investment Calculated</h2>
      )}
    </div>
  );
}

export default App;
