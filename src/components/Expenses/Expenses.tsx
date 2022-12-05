import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

export default function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense: any) =>
      new Date(expense.date).getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={filterChangeHandler}
        />
        {filteredExpenses.map((expense: any) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
