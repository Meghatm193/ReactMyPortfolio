import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
    <div className="left">
        <h1>Who I am ???</h1>
        <p>I'm A Full Stack Web Developer. I have good Knowledge of HTML5, CSS3, Bootstrap, Javascript, React.js, Node.js, Express.js, MongoDB, MySql, Python, Django. I Create Responsive Websites. I am eager to learn new things and Passinate about my work.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={react1} className="img" alt="react1" />
            </div>
            <div className="img-stack bottom">
                <img src={react2} className="img" alt="react2" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent