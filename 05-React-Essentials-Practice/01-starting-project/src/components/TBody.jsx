import PropTypes from "prop-types";

TBody.propTypes = {
  years: PropTypes.array.isRequired,
};

export default function TBody({ years }) {
  return years.map((year) => {
    return (
      <tr key={year}>
        <td>{year}</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
      </tr>
    );
  });
}
