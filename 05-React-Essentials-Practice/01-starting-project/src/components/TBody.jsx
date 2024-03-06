import PropTypes from "prop-types";
import { calculateInvestmentResults, formatter } from "../util/investment";

TBody.propTypes = {
  inputs: PropTypes.object.isRequired,
};

export default function TBody({ inputs }) {
  const results = calculateInvestmentResults(inputs);

  let total_interests = 0;
  return results.map(({ year, interest, valueEndOfYear }) => {
    total_interests += interest;
    return (
      <tr key={year}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(total_interests)}</td>
        <td>{formatter.format(valueEndOfYear - total_interests)}</td>
      </tr>
    );
  });
}
