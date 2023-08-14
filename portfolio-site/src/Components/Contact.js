import React, { useRef } from 'react';
import { styles } from '../styles.js';

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className={`${styles.paddingX} bg-silver py-16`}
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
          />
          <label className='text-gray font-medium'>
            Email
          </label>
          <input
            className='p-1 rounded-md'
            type='email'
            name='user_email'
          />
          <label className='text-gray font-medium'>
            Message
          </label>
          <textarea
            className='h-64 p-1 rounded-md'
            name='message'
          />
          <input
            type='submit'
            value='Send'
            className={`mt-2 bg-gray hover:bg-dark-gray cursor-pointer
            text-off-white font-medium w-16 rounded-md`}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
