import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx'
import IncomeForm from './components/Input/IncomeForm.jsx';
import IncomeList from './components/List/IncomeList.jsx';
import './App.css';

function App() {
  const [income,setIncome] = useState([]);
  const [totalIncome,setTotalIncome] = useState(0);

  // list out the incomes
  useEffect(() => {
    let currentPrice = 0;
    for(let i = 0; i<income.length; i++){
      currentPrice += parseInt(income[i].price);
    }
    setTotalIncome(currentPrice);
  }, [income]);


  return (
    <div className=" font-orbitron max-w-2xl bg-blue-300 mx-auto mt-10 p-5 rounded-xl box-border border-4 border-b-inherit shadow-lg shadow-gray-600/70">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome}/>
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
