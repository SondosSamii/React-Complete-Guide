import { useState } from 'react';
import styled from "styled-components";
import LabeledInput from "./shared/LabeledInput";
import Button from './shared/Button';

const StyledAuthInputs = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;

  & .controls {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  & .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <StyledAuthInputs>
      <div className="controls">
        <LabeledInput
          label="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        <LabeledInput
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) => handleInputChange("password", event.target.value)}
        />
      </div>
      <div className="actions">
        <Button type="button" customClass="text-button">
          Create a new account
        </Button>
        <Button customClass="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </StyledAuthInputs>
  );
}
