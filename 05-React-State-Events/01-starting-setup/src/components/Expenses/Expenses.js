import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const years = [2023, 2022, 2021, 2020, 2019];

  const [filteredYear, setFilteredYear] = useState(years[0]);
  const [joinedFilteredYears, setJoinedFilteredYears] = useState(
    years.filter((year) => year !== 2023).join(", ")
  );

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setJoinedFilteredYears(
      years.filter((year) => year !== parseInt(selectedYear)).join(", ")
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        years={years}
        onChangeYearFilter={filterYearHandler}
      />
      <p style={{ textAlign: "center", color: "white" }}>
        Data for these years: [{joinedFilteredYears}] is hidden
      </p>
      {items.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
