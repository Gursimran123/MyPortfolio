import "./ContactFormStyles.css";
import React,{useRef} from 'react'
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_h9s9417",
         "template_m6vxjnu",
         form.current,
         "3FkucObAFBL_fSWHJ"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
   };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
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



