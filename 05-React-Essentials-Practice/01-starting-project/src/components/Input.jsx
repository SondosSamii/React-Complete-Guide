import PropTypes from "prop-types";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input required type="number" value={value} onChange={onChange} />
    </div>
  );
}
