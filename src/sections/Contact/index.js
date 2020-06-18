import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="title contact-title-color" data-aos="fade-right" data-aos-duration="600">
        <div>Let's get in touch</div>
        <div className="divider" />

        <div className="contact-message">
          <p>Need anything built, want to work together or simply want to have a chat?</p>
          <p>Drop me an e-mail at <span style={{fontWeight: 600}}>abreeza.saleem@hotmail</span> or simply fill out the form below and I will reply to you soon!</p>
        </div>
      </div>
      <div className="contact-me">
        <form>
          <input type="text" required placeholder="name"></input>
          <input type="email" required placeholder="email"></input>
          <textarea required placeholder="message"></textarea>
          <div><input type="submit" value="Send" /></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;