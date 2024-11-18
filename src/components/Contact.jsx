import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        'service_mrbzrhb',
        'template_d6aq4re',
        form.current,
        '-ugTKlHtZCxivEPZd'
      )
      .then(
        () => {
          alert('Message envoyé avec succès!');
        },
        (error) => {
          alert('Une erreur est survenue. Veuillez réessayer.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <section className="dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact
          </h2>
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="space-y-8"
          >
            {/* Nom complet Field */}
            <div>
              <label
                htmlFor="user_name"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className={`shadow-sm bg-gray-50 border ${errors.user_name ? 'border-red-500' : 'border-gray-300'
                  } text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Votre nom complet"
                {...register('user_name', {
                  required: 'Le nom complet est requis',
                  minLength: {
                    value: 2,
                    message: 'Le nom complet doit contenir au moins 2 caractères',
                  },
                })}
              />
              {errors.user_name && (
                <p className="text-red-500 text-sm mt-2">{errors.user_name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className={`shadow-sm bg-gray-50 border ${errors.user_email ? 'border-red-500' : 'border-gray-300'
                  } text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Votre adresse e-mail"
                {...register('user_email', {
                  required: 'L\'email est requis',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Veuillez entrer un email valide',
                  },
                })}
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-2">{errors.user_email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`shadow-sm bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-300'
                  } text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Votre message"
                rows="4"
                {...register('message', {
                  required: 'Le message est requis',
                  minLength: {
                    value: 5,
                    message: 'Le message doit contenir au moins 5 caractères',
                  },
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 mt-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none active:scale-95"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;