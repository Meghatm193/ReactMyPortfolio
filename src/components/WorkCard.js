import "./WorkCardStyle.css"
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="img" />
                <h2 className="project-title"> {props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink className="btn" to={props.view}>View</NavLink>
                        <NavLink className="btn" to={props.source}>Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard