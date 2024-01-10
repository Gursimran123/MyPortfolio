import React, { useState, useEffect } from "react";
import "./HeroImg2Styles.css";

const HeroImg2 = (props) => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const texts = props.text.split("");

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (textIndex < texts.length) {
        setTypedText((prevTypedText) => prevTypedText + texts[textIndex]);
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(textInterval);

        // Pause for 2 seconds before resetting
        setTimeout(() => {
          setTypedText("");
          setTextIndex(0);
        }, 2000);
      }
    }, 100); // Adjust typing speed (milliseconds)

    return () => {
      clearInterval(textInterval);
    };
  }, [textIndex, texts]);

  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.title}</h1>
        <p>{typedText}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
