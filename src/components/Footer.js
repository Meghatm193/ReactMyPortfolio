import './FooterStyle.css';

import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaHackerrank, FaGithub} from 'react-icons/fa';


import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Sangli, Maharashtra</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+91 8451586414 </h4>
                </div>
                <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>meghatm193@gmail.com</h4>
                </div>

            </div>
            
            <div className='right'>
                <h4>About Me</h4>
                <p>I'm Megha Mokashi, a recent MCA graduate from 2023. Passionate about technology, I specialize in MERN stack development and Python Django, with certifications to validate my expertise. I thrive on tackling new projects and relish design challenges.</p>   
                <div className="social">
                
                <a href="https://github.com/Meghatm193" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>

                <a href="https://www.hackerrank.com/certificates/8898f4076f2d" target="_blank" rel="noopener noreferrer">
                <FaHackerrank size={30} style={{ color: "#fff", marginRight: "1rem" }} />
</a>
                <a href="https://www.linkedin.com/in/megha-mokashi-725124269/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
</a>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer