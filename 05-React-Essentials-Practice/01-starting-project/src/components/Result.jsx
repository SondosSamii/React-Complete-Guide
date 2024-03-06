import PropTypes from "prop-types";
import TBody from "./TBody";

Result.propTypes = {
  years: PropTypes.array.isRequired,
};

export default function Result({ years }) {

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
        <TBody years={years}/>
      </tbody>
    </table>
  );
}
