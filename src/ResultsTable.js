

const ResultsTable = ({ buyResult, rentResult }) => {
  return (
    <div>
      <h2>Results</h2>
      <table border="1">
        <thead>
          <tr>
            <th> </th>
            <th>Buying</th>
            <th>Renting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="result-label">Initial Cost</td>
            {/* in order to show an example output with default value */}
            <td>{buyResult ? buyResult.initialCost : '0.00'}</td>
            <td>{rentResult ? rentResult.initialCost : '0.00'}</td>
          </tr>
          <tr>
            <td className="result-label">Recurring Cost</td>
            <td>{buyResult ? buyResult.recurringCost : '0.00'}</td>
            <td>{rentResult ? rentResult.recurringCost : '0.00'}</td>
          </tr>
          <tr>
            <td className="result-label">Return</td>
            <td>{buyResult ? buyResult.return : '0.00'}</td>
            <td>{rentResult ? rentResult.return : '0.00'}</td>
          </tr>
          <tr>
            <td className="result-label">Total</td>
            <td>{buyResult ? buyResult.total : '0.00'}</td>
            <td>{rentResult ? rentResult.total : '0.00'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
