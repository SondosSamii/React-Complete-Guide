import PropTypes from "prop-types";
import { calculateInvestmentResults, formatter } from "../util/investment";

TBody.propTypes = {
  inputs: PropTypes.object.isRequired,
};

export default function TBody({ inputs }) {
  const results = calculateInvestmentResults(inputs);

  let totalInterest = 0;
  return results.map(({ year, interest, valueEndOfYear }) => {
    totalInterest += interest;
    return (
      <tr key={year}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
      </tr>
    );
  });
}
