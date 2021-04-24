import { useEffect, useState } from "react";

const SimpleInput = props => {
  const [name, setName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  
  const isNameValid = name.trim() !== "";
  const nameInputIsInvalid = !isNameValid && isNameTouched;

  const nameInputChangeHandler = e => {
    setName(e.target.value);
  };

  const nameInputBlurHandler = e => {
    setIsNameTouched(true);
  };
  const formSubmitHandler = e => {
    e.preventDefault();
    setIsNameTouched(true);
    if (!isNameValid) return;
    setName("");
    setIsNameTouched(false);
  };
 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${nameInputIsInvalid ? " invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={name}
          placeholder={nameInputIsInvalid ? "Name must not be empty." : "Name"}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
