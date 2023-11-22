import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have installed react-scroll
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      {/* <header className="home-header">
        <div className="logo">
          Rohan.S
        </div>
        <nav className="navbar">
          <Link to="about" smooth={true} duration={1000}>About</Link>
          <Link to="projects" smooth={true} duration={1000}>Projects</Link>
          <Link to="contact" smooth={true} duration={1000}>Contact</Link>
        </nav>
       
      </header> */}

      <main className="hero-section">
        <div className="intro-text">
          <h1>I'm Rohan Sapate,</h1>
          <h2>A Full Stack Developer based in Germany.</h2>
          <p>I’m passionate about building and designing interactive web experiences. If you're looking for someone to bring your projects to life, let's connect.</p>
          <Link to="projects" className="cta-button" smooth={true} duration={1000}>View My Work</Link>
        </div>
        <div className="hero-image">
          {/* Background image set in CSS */}
        </div>
      </main>

     
    </div>
  );
};

export default Home;
