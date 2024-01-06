import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <optipn value="2022">2022</optipn>
          <optipn value="2021">2021</optipn>
          <optipn value="2020">2020</optipn>
          <optipn value="2019">2019</optipn>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
