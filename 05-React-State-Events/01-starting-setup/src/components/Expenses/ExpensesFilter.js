import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = ({ filteredYear, years, onChangeYearFilter }) => {
  const changeYearHandler = (event) => {
    onChangeYearFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={changeYearHandler}>
          {years.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
