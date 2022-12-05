import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props: any) {
  const expenses = props.items;
  const [filteredYear, setFilteredYear] = useState("");

  const onSelectYear = (year: any) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onSelectYear={onSelectYear} />
      <Card className="expenses">
        <ExpenseItem
          id={expenses[0].id}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          id={expenses[1].id}
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          id={expenses[2].id}
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </div>
  );
}
