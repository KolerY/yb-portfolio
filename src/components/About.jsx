import React from 'react';
import photoMoi from '../assets/photo_moi.jpg';
import { ABOUT_TEXT } from '../constants/index.js';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='border-b border-neutral-900 flex flex-col justify-start items-center pb-4 pt-10 lg:pt-36'>
            <h1 className='text-center text-4xl mb-6'>
                À propos de <span className='text-purple-500'>moi</span>
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-start w-full'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 lg:p-8 flex justify-center'>
                    <img
                        src={photoMoi}
                        alt="Images gaming"
                        className='object-cover w-3/4 sm:w-1/2 md:w-2/4 lg:w-2/4 h-auto rounded-lg max-w-xs lg:max-w-sm'
                    />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;