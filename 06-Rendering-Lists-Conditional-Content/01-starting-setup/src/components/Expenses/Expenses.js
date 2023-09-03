import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const years = [2023, 2022, 2021, 2020, 2019];

  const [filteredYear, setFilteredYear] = useState(years[0]);

  let joinedFilteredYears = years
    .reverse()
    .filter((year) => year !== parseInt(filteredYear))
    .join(", ");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        years={years}
        onChangeYearFilter={filterYearHandler}
      />
      <ExpensesList
        filteredYear={filteredYear}
        joinedFilteredYears={joinedFilteredYears}
        items={filteredExpenses}
      />
    </Card>
  );
};

export default Expenses;
