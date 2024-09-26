// import React from 'react';

function ResultsTable({ buyResult, rentResult }) {
  return (
    <div>
      <h2>Results</h2>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>Buying</th>
            <th>Renting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initial Cost</td>
            <td>{buyResult.initialCost}</td>
            <td>{rentResult.initialCost}</td>
          </tr>
          <tr>
            <td>Recurring Cost</td>
            <td>{buyResult.recurringCost}</td>
            <td>{rentResult.recurringCost}</td>
          </tr>
          <tr>
            <td>Return</td>
            <td>{buyResult.return}</td>
            <td>{rentResult.return}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{buyResult.total}</td>
            <td>{rentResult.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
