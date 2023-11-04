import "./WorkStyle.css";
import React from 'react'
// import pro1 from "../assets/portfolio2.jpeg";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imgcard" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>
         {props.content}
        </p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WorkCard