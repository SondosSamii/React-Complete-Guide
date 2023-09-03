import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [toggleForm, setToggleForm] = useState(false);

  const onSaveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    onAddExpense(expenseData);
  };

  const onToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="new-expense">
      {toggleForm ? (
        <ExpenseForm
          onSaveExpense={onSaveNewExpenseHandler}
          onCancel={onToggleForm}
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            onToggleForm();
          }}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
