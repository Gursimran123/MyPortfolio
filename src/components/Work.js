import "./WorkStyle.css";
import React from 'react';
// import pro1 from "../assets/portfolio2.jpeg";
// import { NavLink } from "react-router-dom";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
      {WorkData.map((val,ind)=>{
        return (
            <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                content={val.content}
                view={val.view}
                source={val.source}
            />
        )
      })}
      </div>
    </div>
  );
}

export default Work