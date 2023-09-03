import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "A Book (Paper Book)",
    amount: 29.99,
    date: new Date(2023, 11, 20),
  },
];

function App() {
  const years = [2023, 2022, 2021, 2020, 2019];

  const [filteredYear, setFilteredYear] = useState(years[0]);
  const [expenses, setExpenses] = useState(initialExpenses);

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  const addExpenseHandler = (expense) => {
    setExpenses((prevData) => {
      return [expense, ...prevData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        years={years}
        filteredYear={filteredYear}
        filteredExpenses={filteredExpenses}
        onSelectYear={filterYearHandler}
      />
    </div>
  );
}

export default App;
