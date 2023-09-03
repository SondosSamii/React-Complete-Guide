import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={props.filteredYear}
        years={props.years}
        onChangeYearFilter={props.onSelectYear}
      />
      <ExpensesList
        filteredYear={props.filteredYear}
        years={props.years}
        items={props.filteredExpenses}
      />
    </Card>
  );
};

export default Expenses;
