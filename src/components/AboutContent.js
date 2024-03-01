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
        <ul style={{"list-style-type":"disc"}}>
            <li>I'm A Full Stack Web Developer.</li>
            <li>
                <ul>
                <h3>Proficient in :</h3>
                    <li>HTML5, CSS3, Bootstrap</li>
                    <li>Javascript, React.js, Redux, Rest Api</li>
                    <li>Node.js, Express.js</li>
                    <li>MongoDB, MySql</li>
                    <li>Python, Django</li>
                </ul>
            </li>
            <li>I have developed a diverse portfolio encompassing projects utilizing React.js, Python Django, as well as MERN Stack technologies. For a detailed overview of my work, please refer to the Projects section.</li>
            <li> I am eager to learn new things and Passinate about my work.</li>
        </ul>
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