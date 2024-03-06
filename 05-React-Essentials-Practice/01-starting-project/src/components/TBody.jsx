import PropTypes from "prop-types";

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
        <td>{valueEndOfYear}</td>
        <td>{interest}</td>
        <td>{total_interests}</td>
        <td>{valueEndOfYear - total_interests}</td>
      </tr>
    );
  });
}
