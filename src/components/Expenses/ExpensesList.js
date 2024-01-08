import React from "react";
import ExpenseItem from "./ExpensesItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else if (props.items.length === 1) {
    return (
      <div>
        <h2 className="expenses-list__fallback">Only single Expense here</h2>
        <ExpenseItem
          key={props.items[0].id}
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
