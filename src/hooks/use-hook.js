import { useReducer } from "react";

const defaultInputState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT")
    return { value: action.value, isTouched: state.isTouched };
  if (action.type === "BLUR") return { isTouched: true, value: state.value };
  return defaultInputState;
};

const useInput = validateValue => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    defaultInputState
  );

  const isValueValid = validateValue(inputState.value);
  const hasError = !isValueValid && inputState.isTouched;

  const valueChangeHandler = event => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = event => {
    dispatchInput({ type: "BLUR" });
  };
  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: isValueValid,
    reset,
  };
};
export default useInput;

// import { useState } from "react";

// const useInput = validateValue => {
//   const [value, setValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const isValueValid = validateValue(value);
//   const hasError = !isValueValid && isTouched;

//   const valueChangeHandler = event => {
//     setValue(event.target.value);
//   };

//   const inputBlurHandler = event => {
//     setIsTouched(true);
//   };
//   const reset = () => {
//     setValue("");
//     setIsTouched(false);
//   };

//   return {
//     value,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     isValid: isValueValid,
//     reset,
//   };
// };
// export default useInput;
