import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import { IExpenseDetail } from "../../types";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(pro: IExpenseDetail) {
  const [title , setTitle] = useState(pro.title);
  
  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={pro.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${pro.amount}</div>
      </div>
      <button onClick={clickHandler}>Edit</button>
    </Card>
  );
}
