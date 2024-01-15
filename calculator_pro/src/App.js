import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

const App = () => {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
   

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData);
  };

  return (
     <>
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {yearlyData.length > 0 && <ResultsTable yearlyData={yearlyData} />}
    </div>
     </>
  );
}

export default App;
