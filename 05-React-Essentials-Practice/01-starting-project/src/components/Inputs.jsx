import PropTypes from "prop-types";
import Input from "./Input";

Inputs.propTypes = {
  inputs: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};

export default function Inputs({ inputs, onChange, errorMsg }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          value={inputs.initialInvestment}
          onChange={(e) => onChange("initialInvestment", e)}
        />
        <Input
          label="Annual Investment"
          value={inputs.annualInvestment}
          onChange={(e) => onChange("annualInvestment", e)}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          value={inputs.expectedReturn}
          onChange={(e) => onChange("expectedReturn", e)}
        />
        <Input label="Duration" value={inputs.duration} onChange={(e) => onChange("duration", e)} />
      </div>
      {errorMsg && <p className="center">{errorMsg}</p>}
    </div>
  );
}
