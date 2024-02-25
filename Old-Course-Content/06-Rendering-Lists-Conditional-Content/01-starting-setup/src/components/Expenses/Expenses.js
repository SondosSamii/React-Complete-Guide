import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const years = [2023, 2022, 2021, 2020, 2019];

  const [filteredYear, setFilteredYear] = useState(years[0]);

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        years={years}
        onChangeYearFilter={filterYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        filteredYear={filteredYear}
        years={years}
        expenses={filteredExpenses}
      />
    </Card>
  );
};

export default Expenses;
