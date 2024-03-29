import "./HeroStyle.css";
import React from 'react';
import IntoImg from "../assets/into-img.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntoImg} alt="IntoImg" />
        </div>
        <div className="content">
          <p>HI, I'M Megha Mokashi</p>
          <h1>Full Stack Developer</h1>
          <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg