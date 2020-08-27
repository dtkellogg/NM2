import React from "react";
import axios from "axios";
import '../../index.css'

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  console.log(firstName)

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      firstName,
      lastName,
      email,
    };

    axios.post("/api/signup", dataToSubmit);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubmitted(true);
  };

  return (
    <form className="form__footer" onSubmit={handleSubmit}>
      <div className="form__header">
        <h3 className="text-size-3">Newsletter Signup Form</h3>
        <h4 className="text-size-4">
          Please provide your name and email address
        </h4>
        {submitted && (
          <p className="form__success-message">
            Successfully Registered for Newsletter
          </p>
        )}
        {/* {submitted && <p>Email has been sent.</p>} */}
      </div>
      <div className="form__content">
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            className="form__input input__footer"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            className="form__input input__footer"
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Email</label> */}
          <input
            type="email"
            className="form__input input__footer"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn btn__form" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

// Form needs:
// 1. name
// 2. email
// 3. phone (optional)
// 4. subject
// 5. message
