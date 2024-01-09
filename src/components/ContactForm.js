import "./ContactFormStyles.css";
import React from 'react'

const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" name="from_name" />
        <label>Email</label>
        <input type="email" placeholder="@gmail.com" name="from_email" />
        <label>Subject</label>
        <input type="text" placeholder="Your Subject please" name="subject" />
        <label>Message</label>
        <textarea
          id=""
          cols="30"
          rows="6"
          placeholder="Your message here"
          name="message"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm



