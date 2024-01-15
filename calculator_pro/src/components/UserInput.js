import React, { useState } from 'react';

function UserInput({ onCalculate }) {
  const [currentSavings, setCurrentSaving] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
    onCalculate({
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      "duration": duration,
    
    })

  };




  return (
    <form className="form" onSubmit={submitHandler} >

      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(event) => {
              setCurrentSaving(event.target.value)
            }}  ></input>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={(event) => {
              setYearlyContribution(event.target.value)
            }} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={(event) => {
              setExpectedReturn(event.target.value)
            }} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number"
            id="duration"

            value={duration}
            onChange={(event) => {
              setDuration(event.target.value)
            }} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={() =>{
          setCurrentSaving('10000');
          setYearlyContribution('1200');
          setExpectedReturn('7');
          setDuration('10')

        }}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>

  );

};


export default UserInput;