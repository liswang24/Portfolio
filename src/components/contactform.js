import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    formInput,
    formTextarea,
    contactForm
} from '../styles/contactForm.module.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("meqvkyag");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className={contactForm}>
      <h3>Send me a message!</h3>
      <form onSubmit={handleSubmit}>
      <input
        className={formInput}
        id="name"
        type="text" 
        name="name"
        placeholder="Full Name*"
      />
      <ValidationError 
        prefix="Full Name" 
        field="name"
        errors={state.errors}
      />
      <input
        className={formInput}
        id="email"
        type="email" 
        name="email"
        placeholder="Email Address*"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <textarea
        className={formTextarea}
        id="message"
        name="message"
        placeholder="Message*"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  </div>
  );
}

export default ContactForm;