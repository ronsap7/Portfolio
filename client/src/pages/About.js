import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="education-experience">
          <div>
            <h3>Education</h3>
            <p>M.Sc. in Computer Science - University of Passau</p>
            <p>B.Tech. in Electronics and Telecommunications - G.H Raisoni College of Engineering</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>Full Stack Developer - WBS Coding School</p>
            <p>Intern - Indus Robotics & Automation Research</p>
          </div>
        </div>
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Linux</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
