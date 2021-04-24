import {  useState } from "react";

const emptyForm = {
  name: {
    value: "",
    isTouched: false,
    isValid: false,
  },
  email: {
    value: "",
    isTouched: false,
    isValid: false,
  },
};

const SimpleInput = props => {
  const [form, setForm] = useState(emptyForm);
  const isFormValid = Object.values(form).reduce(
    (acc, cur) => acc && cur.isValid,
    true
  );
  const isNameInvalid = !form.name.isValid && form.name.isTouched;
  const isEmailInvalid = !form.email.isValid && form.email.isTouched;

  const nameChangeHandler = e => {
    setForm({
      ...form,
      name: {
        value: e.target.value,
        isTouched: true,
        isValid: e.target.value.trim() !== "",
      },
    });
  };
  const emailChangeHandler = e => {
    setForm({
      ...form,
      email: {
        value: e.target.value,
        isTouched: true,
        isValid: e.target.value.includes("@"),
      },
    });
  };

  const nameBlurHandler = e => {
    setForm({ ...form, name: { ...form.name, isTouched: true } });
  };
  const emailBlurHandler = e => {
    setForm({ ...form, email: { ...form.email, isTouched: true } });
  };
  const formSubmitHandler = e => {
    e.preventDefault();
    setForm({
      ...form,
      name: { ...form.name, isTouched: true },
      email: { ...form.email, isTouched: true },
    });

    if (!isFormValid) return;
    setForm(emptyForm);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control${isNameInvalid ? " invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={form.name.value}
          placeholder={isNameInvalid ? "Name must not be empty." : "Name"}
        />
      </div>
      <div className={`form-control${isEmailInvalid ? " invalid" : ""}`}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={form.email.value}
          placeholder={isEmailInvalid ? "Please enter a valid email" : "Email"}
        />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
