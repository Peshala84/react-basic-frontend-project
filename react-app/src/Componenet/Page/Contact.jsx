import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Contact.css'

export const Contact = () => {

  const { contactId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
 
  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [submitted]);

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log({ name, email, message });
      setSubmitted(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='form-box'>

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className='form-inner'>

        <div>
          <label className='form-inner-label'>Name</label>
          <input type="text" className='form-outer-input' value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className='form-para'>{errors.name}</p>}
        </div>

        <div>
          <label className='form-inner-label'>Email</label>
          <input type="email" className='form-outer-input' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className='form-para'>{errors.email}</p>}
        </div>

        <div>
          <label className='form-inner-masse'>Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          {errors.message && <p className='form-para'>{errors.message}</p>}
        </div>

        <button type="submit" className='form-button'>Submit</button>
        <br />
        {submitted && <p className='form-para'> Form submitted successfully!</p>}
      </form>

      {contactId && <p className='form-para'>Contact ID: {contactId}</p>}
      
    </div>
  );
};
