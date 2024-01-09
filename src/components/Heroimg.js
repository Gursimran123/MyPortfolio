import "./HeroimgStyles.css";
import React, { useEffect, useState } from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

 
 const Heroimg = () => {
  const [text, setText] = useState("");
  const phrases = [
    "ReactJs Developer.",
    "MERN Developer.",
    "Coding Enthusiast.",
  ];
  const delay = 200;
   // Delay between each character in milliseconds
    const pauseDuration = 2000; 

useEffect(() => {
  let index = 0;

  const typeText = (currentText, currentIndex) => {
    if (currentIndex < phrases[index].length) {
      currentText += phrases[index][currentIndex];
      setText(currentText);
      setTimeout(() => typeText(currentText, currentIndex + 1), delay);
    } else {
      setTimeout(() => {
        setText(""); // Clear the text before starting the next phrase
        index = (index + 1) % phrases.length;
        typeText("", 0); // Start typing the next phrase
      }, pauseDuration);
    }
  };

  typeText("", 0); // Start typing the first phrase
}, []);
   return (
     <div className="hero">
       <div className="mask">
         <img className=" intro-img" src={IntroImg} alt="introImg" />
       </div>
       <div className="content">
         <p>Hi, I'm Gursimran Singh.</p>
         <h1>{text}</h1>
         <div>
           <Link to="/project" className="btn">
             Projects
           </Link>
           <Link to="/contact" className="btn btn-light">
             Contact
           </Link>
         </div>
       </div>
     </div>
   );
 }
 
 export default Heroimg