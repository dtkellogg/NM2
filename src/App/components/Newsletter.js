import React from "react";
import axios from "axios";

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
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__header">
        <h1>Newsletter Signup Form</h1>
        <h4>Please provide your name and email address</h4>
        {submitted && <p className="form__success-message">Successfully Registered for Newsletter</p>}
        {/* {submitted && <p>Email has been sent.</p>} */}
      </div>
      <div className="form__content">
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Email</label> */}
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn btn__form" onClick={handleSubmit}>
          Submit it!
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
