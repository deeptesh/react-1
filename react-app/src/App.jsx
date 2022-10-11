import React, { useState } from 'react';
import { NewExpense } from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummyExpenses = [
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
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
