import React from 'react';
import { NewExpense } from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: '98.67',
      date: new Date(2022, 9, 30),
    },
    {
      id: 'e2',
      title: 'Bike Insurance',
      amount: '998.67',
      date: new Date(2022, 9, 30),
    },
    {
      id: 'e3',
      title: 'Life Insurance',
      amount: '233.67',
      date: new Date(2022, 9, 30),
    },
    {
      id: 'e4',
      title: 'Health Insurance',
      amount: '9688.67',
      date: new Date(2022, 9, 30),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('appp');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
