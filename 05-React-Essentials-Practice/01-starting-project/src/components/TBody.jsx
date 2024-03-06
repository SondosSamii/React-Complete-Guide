import PropTypes from "prop-types";
import { formatter } from "../util/investment";

TBody.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function TBody({ results }) {
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
