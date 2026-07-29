import { useEffect, useState } from 'react';
import './Contact.css';

const STORAGE_KEY = 'contactFormData';

function Contact() {
  const [formData, setFormData] = useState(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { name: '', email: '', message: '' };
  });
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      window.localStorage.removeItem(STORAGE_KEY);
      setStatusMessage('Your form is ready for a new message.');
    }, 2500);

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatusMessage('Draft updated');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setStatusMessage('Your message has been submitted successfully!');
  };

  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="success-message">
          <h3>Thank you, {formData.name}!</h3>
          <p>Your message has been sent successfully. We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-status">{statusMessage}</div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;