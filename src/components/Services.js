import "./ServicesStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="services">
      <div className="services">
        <h2>Skills</h2>
        <div className="card-container">
          <div className="card">
            <h3>Frontend Development</h3>
            <p>
              I have the moderate knowledge of the Frontend related skills such
              as Html, CSS, Javascript, React.js and Next.js. Have hands on
              experience in creating the web applications and eager to learn
              more and more about the other frontend technologies.
            </p>
            <Link to="/about" class="btn">
              Read More
            </Link>
          </div>
          <div className="card">
            <h3>Backend Development</h3>
            <p>
              Have a basic to intermediate knowlegde of the backend technolgies
              such as Node.js, Express.js, MongoDB etc. Had a project related to
              the Mern stack where i implemented this skills to develop a
              website.
            </p>
            <Link to="/about" class="btn">
              Read More
            </Link>
          </div>
          <div className="card">
            <h3>Others</h3>
            <p>
              The other skills which i have is of C++, Python, Git and
              Github(for deploying or for saving the code) , Rest APIs, some
              knowledge related to testing i.e. Jest and the React testing
              library, UI/UX(designing) and problem solving.
            </p>
            <Link to="/about" class="btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Services