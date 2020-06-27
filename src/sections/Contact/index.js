import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [ status, setStatus ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    setLoading(true);
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setLoading(false);
        setStatus(true);
      } else {
        setLoading(false);
        setStatus(false);
      }
    };
    xhr.send(data);
  }

  useEffect(() => {
    const successMsg = document.querySelector(".success-msg");
    if(successMsg) successMsg.classList.add("slide-msg-down");
  }, [status]);

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
        <form onSubmit={handleSubmit} action="https://formspree.io/xwkrqolp" method="POST">
          <input type="text" required placeholder="name" name="name"></input>
          <input type="email" required placeholder="email" name="_replyto"></input>
          <textarea required placeholder="message" name="message"></textarea>
          {status && <span className="success-msg">Message sent! Thank you for contacting me.</span>}
          {loading ? (
            <div className="spinner-custom-css">
              <div className="spinner-inner">
                <FontAwesomeIcon icon={faSpinner} spin style={{fontSize: 20}} />
              </div>
            </div>
          ): (<div><input type="submit" value="Send" /></div>)}
        </form>
      </div>
    </div>
  );
}

export default Contact;