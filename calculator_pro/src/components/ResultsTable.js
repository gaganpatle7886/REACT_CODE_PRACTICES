import React from 'react';

const ResultsTable = ({ yearlyData }) => {
    return (
            <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {yearlyData.map((data) => (
          <tr  key={data.year}>

            {/* Step4: You output all these rows of that table dynamically, one row per year beacuse we are deriving */}
            {/* investment data for mutiple years (right now it is hardcoded)*/}
            <td>{data.year}</td>
            <td>${data.savingsEndOfYear.toFixed(2)}</td>
            <td>&{data.yearlyInterest.toFixed(2)}</td>
            <td>${(data.savingsEndOfYear - 10000 - data.yearlyContribution * data.year).toFixed(2) }</td>
            <td>${(10000 +data.yearlyContribution* data.year).toFixed(2)}</td>
            
          </tr>
        ))}
        </tbody>
      </table>
    );

};


export default ResultsTable;