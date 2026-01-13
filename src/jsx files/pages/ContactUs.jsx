import React, { useRef } from 'react';
import '../../css files/pages/Sponsors.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // Import EmailJS SDK

export default function ContactUs() {
  const navigate = useNavigate();
  const form = useRef(); // Create a ref for the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    emailjs
      .sendForm(
        'service_1o5js8m',
        'template_adde5ch',
        form.current, 
        {
          publicKey: 'qes6iO9y2RGpmkhBi', 
        }
      )
      .then(
        () => {
          alert('Message sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <div className="page">
      <div className="sponsors-page">
        <h1>Contact Us!</h1>
        <p>If you were impressed by our robots and our story, please use the form below to contact us!</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />

          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <input type="submit" value="Send Message" className="button-decoration" />
        </form>

        <h4>If you were impressed by our robots and our story and you want to help more, you can sponsor us!</h4>
        <button className="button-decoration" onClick={() => navigate('/sponsor-us')}>
          Sponsor Us
        </button>
      </div>
    </div>
  );
}
