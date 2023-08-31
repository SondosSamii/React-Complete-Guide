import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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

  let expensesContent = (
    <p style={{ textAlign: "center", color: "white" }}>
      No Expenses Found in {filteredYear}
    </p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = (
      <>
        <p style={{ textAlign: "center", color: "white" }}>
          Data for these years: [{joinedFilteredYears}] is hidden
        </p>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} item={expense} />
        ))}
      </>
    );
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        years={years}
        onChangeYearFilter={filterYearHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
