import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Udupi Dinner",
    amount: 180,
    date: new Date(2022, 10, 2),
  },
  {
    id: "e2",
    title: "Bike Servicing",
    amount: 3580,
    date: new Date(2022, 11, 16),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 9000,
    date: new Date(2022, 10, 1),
  },
  {
    id: "e4",
    title: "Paint Supplies",
    amount: 150,
    date: new Date(2022, 11, 10),
  },
  {
    id: "e5",
    title: "Home Supplies",
    amount: 6550,
    date: new Date(2021, 11, 10),
  },
  {
    id: "e6",
    title: "Shoes",
    amount: 5150,
    date: new Date(2021, 11, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses: any) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
