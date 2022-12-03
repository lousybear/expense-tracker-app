import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

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
    <div className="App">
      <h2>Hello World</h2>
      <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
    </div>
  )
}

export default App;
