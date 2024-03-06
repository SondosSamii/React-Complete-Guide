import PropTypes from "prop-types";
import TBody from "./TBody";

Results.propTypes = {
  inputs: PropTypes.object.isRequired,
};

export default function Results({ inputs }) {
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
        <TBody inputs={inputs} />
      </tbody>
    </table>
  );
}
