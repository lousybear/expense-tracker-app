import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props: any) {
  const [addExpense, setAddExepense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const loadAddExpenseForm = () => {
    setAddExepense(true);
  };

  const loadAddExpenseButton = () => {
    setAddExepense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={loadAddExpenseForm}>Add New Expense</button>
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={loadAddExpenseButton}
        />
      )}
    </div>
  );
}
