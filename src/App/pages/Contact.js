import React from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const dataToSubmit = {
      name,
      email,
      phone,
      subject,
      message,
    };
    console.log(dataToSubmit)
    
    // api(dataToSubmit)
    await axios
      .post("/api/v1/messages", dataToSubmit)
      .then(response => {console.log(`axios response: ${response.data}`)})

      // setSubmitted(false)

      console.log(submitted)
    // setName('')
    // setEmail('')
    // setPhone('')
    // setSubject('')
    // setMessage('')
    // setSubmitted(false)
  };

    //  const api = React.useEffect((dataToSubmit) => {
    //     axios.post("/api/v1/messages", dataToSubmit).then(setSubmitted(true));
    //   }, [])
    

  // React.useEffect(() => {
  //   const id = window.setTimeout(() => {
  //     setSubmitted(false)
  //   }, 1000)
  // }, [submitted])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__header">
        <h2  className="text-size-2">Any Questions?</h2>
        <h3  className="text-size-3">Please leave us a message here.</h3>
        {submitted && (
          <p className="form__success-message">Email has been sent.</p>
        )}
        <button className="btn btn__form btn__contact" onClick={handleSubmit}>
          Submit it!
        </button>
      </div>
      <div className="form__content">
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            className="form__input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Email</label> */}
          <input
            type="email"
            className="form__input"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Phone Number</label> */}
          <input
            type="text"
            className="form__input"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Subject</label> */}
          <input
            type="text"
            className="form__input"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Message</label> */}
          <textarea
            type="text"
            className="form__textarea form__input"
            placeholder="Please enter your message here."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
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
