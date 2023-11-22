import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>If you're interested in working together or have a question, feel free to reach out.</p>
        <div className="contact-info">
          <p>Email: rhnsapate16@gmail.com</p>
          <p>LinkedIn: [Your LinkedIn Profile]</p>
          {/* Add more contact details if necessary */}
        </div>
        {/* A contact form can be added here */}
      </div>
    </section>
  );
};

export default Contact;
