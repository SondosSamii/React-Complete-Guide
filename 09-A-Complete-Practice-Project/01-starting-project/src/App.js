import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const [finalYearlyData, setFinalYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0,
      totalYearlyContribution = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalYearlyContribution += yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear:
          currentSavings % 1 === 0 ? currentSavings : currentSavings.toFixed(2),
        yearlyInterest:
          yearlyInterest % 1 === 0 ? yearlyInterest : yearlyInterest.toFixed(2),
        totalInterest:
          totalInterest % 1 === 0 ? totalInterest : totalInterest.toFixed(2),
        totalYearlyContribution:
          totalYearlyContribution % 1 === 0
            ? totalYearlyContribution
            : totalYearlyContribution.toFixed(2),
      });
    }
    // do something with yearlyData ...

    setFinalYearlyData((prevData) => {
      return [...prevData, ...yearlyData];
    });
  };

  return (
    <div>
      <Header />
      <Form onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {finalYearlyData && finalYearlyData.length > 0 ? (
        <Table tableData={finalYearlyData} />
      ) : (
        <h2 style={{ textAlign: "center" }}>No Data Calculated</h2>
      )}
    </div>
  );
}

export default App;
