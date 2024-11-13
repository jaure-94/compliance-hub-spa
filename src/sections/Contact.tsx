"use client";

import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from 'antd';
import validateForm from '@/sections/libs/validateForm';
import { ContactCard } from '@/components/ContactCard';

export const Contact = () => {
  const formSendEmail = useRef<HTMLFormElement | any>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({ from_name: "", email: "", message: "" });

  const [errors, setErrors] = useState({ fromNameError: "", emailError: "", messageError: "" });

  const env = {
    service_id: process.env.NEXT_PUBLIC_SERVICE_ID as string,
    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY as string
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validate = handleValidate();

    if (validate) {
      console.log("submit function is working", form);

      emailjs.sendForm(env.service_id, env.template_id, formSendEmail.current, {
        publicKey: env.public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowAlert(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    } else {
      console.log("error");
    }
  };

  const handleValidate = () => {
    const validation = validateForm(form);
    setErrors(validation);
    if(validation.state === "validated") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="flex justify-center py-10" id="get-in-touch">
      <div className="container">
        <h2 className="heading-section text-center mt-4 mb-8 w-full">Get In Touch With Us</h2>
        <p className='flex justify-center'>Feel free to give us a call, or fill out the form below to send us a message or inquiry about our services.</p>
        
        <div className='flex flex-col md:flex-row gap-8'>
          <div className="flex flex-col p-7 my-7 w-full max-w-3xl md:max-w-5xl md:p-12 lg:max-w-7xl lg:py-0 lg:px-16 bg-gray-300 rounded-lg">
            <h3 className="heading-form mb-5 lg:mt-10">Send us a message</h3>
            {showAlert&&
              <Alert type="success" message="success" description="Message sent!" closable />
            }
            <div className='flex flex-col gap-10 md:gap-10 lg:flex-row justify-between'>
              <form ref={formSendEmail} onSubmit={handleSubmit} className="lg:w-[550px]">

                <div className="pt-5">
                  <label htmlFor="name">
                    Name
                  </label>
                  <input
                    id="from_name"
                    type="name" 
                    name="from_name"
                    className="form-input"
                    value={form.from_name}
                    onChange={(e) => setForm({ ...form, from_name: e.target.value })}
                  />
                  { errors.fromNameError ? (<p className="text-sm text-red-600 font-medium">{ errors.fromNameError }</p>) : null }
                </div>
                
                <div className="pt-5">
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    className="form-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  { errors.emailError ? (<p className="text-sm text-red-600 font-medium">{ errors.emailError }</p>) : null }
                </div>

                <div className="pt-5">
                  <label htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-text-area"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  { errors.messageError ? (<p className="text-sm text-red-600 font-medium">{ errors.messageError }</p>) : null }
                </div>

                <button type="submit" className="btn btn-primary mt-10 lg:mb-10">
                  Submit
                </button>
              </form>

              <ContactCard
                phone="+44 7411 160390"
                email="info@compliancehuborg.uk"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
