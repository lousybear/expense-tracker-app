import React from "react";
import ExpenseDate from "./ExpenseDate";
import { IExpenseDetail } from "../types";
import "./ExpenseItem.css";

export default function ExpenseItem(props: IExpenseDetail) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
