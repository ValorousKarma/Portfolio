import React, { useRef, useState } from 'react';
import { styles } from '../styles.js';
import emailForm from '../constants/email.js';

import emailjs from '@emailjs/browser';

const RenderHeader = () => {
  return (
    <h1
      className={`text-center text-dark-green text-[20px] sm:text-[28px] font-bold`}
    >
      Contact Me.
    </h1>
  );
};

/*  EMAIL FORM 
  - https://www.emailjs.com/ */
const Contact = () => {
  const form = useRef();
  const [sent, toggleSent] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  /*  SEND EMAIL FUNCTIOn
    - handles sending email w/ emailjs template
    - updates "sent" and "formValues" states */
  const sendEmail = (e) => {
    e.preventDefault();

    // send email
    emailjs
      .sendForm(
        emailForm.SERVICE_ID,
        emailForm.TEMPLATE_ID,
        form.current,
        emailForm.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // resset all form input to empty after email is sent
    setFormValues({
      name: '',
      email: '',
      message: '',
    });

    // display "email sent" message
    toggleSent(true);
  };

  /*  CONTACT FORM JSX
    - RENDER FUNCTIONAL CONTACT FORM */
  return (
    <section
      className={`${styles.paddingX} bg-silver py-16`}
      id='contact'
    >
      <div
        className={`mx-auto w-full max-w-xl bg-off-white 
        rounded-md shadow-xl p-10`}
      >
        <RenderHeader />
        <form
          ref={form}
          onSubmit={sendEmail}
          className='grid grid-cols-1 gap-y-1 justify-content-left'
        >
          <label className='text-gray font-medium'>
            Name
          </label>
          <input
            className='p-1 rounded-md'
            type='text'
            name='user_name'
            value={formValues.name}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                name: e.target.value,
              })
            }
          />
          <label className='text-gray font-medium'>
            Email
          </label>
          <input
            className='p-1 rounded-md'
            type='email'
            name='user_email'
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }
          />
          <label className='text-gray font-medium'>
            Message
          </label>
          <textarea
            className='h-64 p-1 rounded-md'
            name='message'
            value={formValues.message}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                message: e.target.value,
              })
            }
          />
          <input
            type='submit'
            value='Send'
            className={`mt-2 bg-gray hover:bg-dark-gray cursor-pointer
            text-off-white font-medium w-16 rounded-md`}
          />
        </form>
        <p
          className={`${sent ? '' : 'hidden'}
        text-light-green font-medium`}
        >
          Email Sent!
        </p>
      </div>
    </section>
  );
};

export default Contact;
