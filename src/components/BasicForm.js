import useInput from "../hooks/use-hook";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");
const BasicForm = props => {
  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);
  const {
    value: lastname,
    hasError: lastnameHasError,
    isValid: lastnameIsValid,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameReset,
  } = useInput(isNotEmpty);
  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  const isFormValid = nameIsValid && lastnameIsValid && emailIsValid;

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!isFormValid) return;
    console.log(name, lastname, email);
    nameReset();
    lastnameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control${nameHasError ? " invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            placeholder={nameHasError ? "Name must not be empty" : "Name"}
          />
        </div>
        <div className={`form-control${lastnameHasError ? " invalid" : ""}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            placeholder={
              lastnameHasError ? "Last name must not be empty" : "Name"
            }
          />
        </div>
      </div>
      <div className={`form-control${emailHasError ? " invalid" : ""}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          placeholder={emailHasError ? "Please enter a valid email" : "Email"}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
