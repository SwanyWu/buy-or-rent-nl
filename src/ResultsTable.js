const ResultsTable = ({ years, buyResult, rentResult }) => {
    return (
      <div>
        <h3 style={{ color: '#141c75' }}>After # {years} {years === 1 ? 'year' : 'years'}</h3>
  
        <div className="tables-container">
          {/* Buying Table */}
          <div className="table-section">
            <h3>Buying</h3>
            <table border="1">
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Amount (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Red-colored rows */}
                    <tr>
                    <td className="result-label" style={{ color: 'red' }}>Initial Cost</td>
                    <td>{buyResult ? -buyResult.initialCost : '0.00'}</td>
                    </tr>
                    <tr>
                    <td className="result-label" style={{ color: 'red' }}>Mortgage Leftover</td>
                    <td>{buyResult ? -buyResult.mortgageLeftover : '0.00'}</td>
                    </tr>
                    
                    {/* Green-colored rows */}
                    <tr>
                    <td className="result-label" style={{ color: 'green' }}>House Worth</td>
                    <td>{buyResult ? buyResult.futureHousePrice : '0.00'}</td>
                    </tr>
                    <tr>
                    <td className="result-label" style={{ color: 'green' }}>Tax Return</td>
                    <td>{buyResult ? buyResult.taxReturn : '0.00'}</td>
                    </tr>
                    <tr style={{ borderTop: '1.5px solid black' }}>
                    <td className="result-label" style={{ color: 'black' }}>Total</td>
                    <td>{buyResult ? buyResult.total : '0.00'}</td>
                    </tr>
                </tbody>
            </table>
          </div>
  
          {/* Renting Table */}
          <div className="table-section">
            <h3>Renting</h3>
            <table border="1">
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Amount (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Red-colored rows */}
                    <tr>
                    <td className="result-label" style={{ color: 'red' }}>Total Rent</td>
                    <td>{rentResult ? -rentResult.totalRent : '0.00'}</td>
                    </tr>
                    {/* Green-colored rows */}
                    <tr>
                    <td className="result-label" style={{ color: 'green' }}>Accumulated Saving</td>
                    <td>{rentResult ? rentResult.futureSaving : '0.00'}</td>
                    </tr>
                    <tr style={{ borderTop: '1.5px solid black' }}>
                    <td className="result-label" style={{ color: 'black' }}>Total</td>
                    <td>{rentResult ? rentResult.total : '0.00'}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResultsTable;
  