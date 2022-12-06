import React from "react";
import ExpenseDate from "./ExpenseDate";
import { IExpenseDetail } from "../../types";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(props: IExpenseDetail) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
