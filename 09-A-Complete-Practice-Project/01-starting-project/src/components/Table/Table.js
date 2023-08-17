import styles from "./Table.module.css";

const Table = ({ tableData }) => {
  return (
    <table className={styles.result}>
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
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.savingsEndOfYear}</td>
              <td>{data.yearlyInterest}</td>
              <td>{data.totalInterest}</td>
              <td>{data.totalYearlyContribution}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
