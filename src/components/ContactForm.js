import "./ContactFormStyles.css";
import React,{useEffect} from 'react';
import { Element } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setScrollVisibleContactForm, selectScrollVisibleContactForm } from "../redux/slice/scrollSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectScrollVisibleContactForm);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    dispatch(setScrollVisibleContactForm(scrollPosition > 230));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return (
    <Element name='form'>
      <div className={`form ${isVisible ? "visible" : ""}`}>
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
    </Element>
  );
}

export default ContactForm



