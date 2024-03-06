import PropTypes from "prop-types";
import TBody from "./TBody";

Result.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Result({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <TBody results={results} />
      </tbody>
    </table>
  );
}
