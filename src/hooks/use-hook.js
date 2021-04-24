import { useState } from "react";

const useInput = validateValue => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(value);
  const hasError = !isValueValid && isTouched;

  const valueChangeHandler = event => {
    setValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };
  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: isValueValid,
    reset,
  };
};
export default useInput;
