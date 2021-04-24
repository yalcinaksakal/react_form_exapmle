import useInput from "../hooks/use-hook";

const SimpleInput = props => {
  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(value => value.trim() !== "");
  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(value => value.includes("@"));

  const isFormValid = nameIsValid && emailIsValid;
  const formSubmitHandler = e => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log(name, email);
    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${nameHasError ? " invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
          placeholder={nameHasError ? "Name must not be empty." : "Name"}
        />
      </div>
      <div className={`form-control${emailHasError ? " invalid" : ""}`}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
          placeholder={emailHasError ? "Please enter a valid email" : "Email"}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
