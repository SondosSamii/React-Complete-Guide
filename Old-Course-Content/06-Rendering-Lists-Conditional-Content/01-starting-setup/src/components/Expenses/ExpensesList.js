import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ years, filteredYear, expenses }) => {
  let joinedFilteredYears = years
    .reverse()
    .filter((year) => year !== parseInt(filteredYear))
    .join(", ");

  let expensesFilterMsg = (
    <p className="expenses-list__fallback">
      No Expenses Found in {filteredYear}
    </p>
  );

  if (expenses.length > 0) {
    expensesFilterMsg = (
      <p className="expenses-list__fallback">
        Data for these years: [{joinedFilteredYears}] is hidden
      </p>
    );
  }

  return (
    <>
      {expensesFilterMsg}
      {expenses.length > 0 && (
        <ul className="expenses-list">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} item={expense} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ExpensesList;
