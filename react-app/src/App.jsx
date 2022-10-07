import React from 'react';
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
  return (
    <div>
      <h2>App</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
