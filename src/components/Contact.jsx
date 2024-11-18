import React from 'react'
import { CONTACT } from '../constants'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <section className="dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`shadow-sm bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                  } text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                placeholder="email@xyz.com"
                {...register('email', {
                  required: 'Email est obligatoire',
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Email invalide',
                  },
                })}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Message..."
                {...register('message', {
                  required: 'Message est obligatoire',
                  minLength: {
                    value: 10,
                    message: 'Message doit contenir au moins 10 caractères',
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-gray-100 rounded-lg bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition duration-200 ease-in-out"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact