import { useState } from 'react';
import LabeledInput from "./shared/LabeledInput";
import Button from './shared/Button';

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
    <div className="w-full max-w-md p-8	my-0 mx-auto rounded-lg text-white shadow-md bg-gradient-to-b from-[#474232] to-[#28271c]">
      <div className="flex flex-col gap-2 mb-6">
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
      <div className="flex justify-end gap-4">
        <Button type="button" customClass="text-button">
          Create a new account
        </Button>
        <Button customClass="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
