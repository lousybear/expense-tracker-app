import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Udupi Dinner",
      amount: 180,
      date: new Date(2022, 12, 2),
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
      date: new Date(2022, 12, 1),
    },
    {
      id: "e4",
      title: "Paint Supplies",
      amount: 150,
      date: new Date(2022, 11, 10),
    },
    {
      id: "e5",
      title: "DMart Bill",
      amount: 1950,
      date: new Date(2022, 11, 18),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
