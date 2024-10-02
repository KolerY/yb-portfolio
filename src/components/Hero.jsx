import React from 'react'
import { HERO_CONTENT } from '../constants/index.js'
import profilePic from '../assets/profile-pic-transparent.png'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
});

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap lg:flex-nowrap items-center'>
                <div className='w-full lg:w-3/4 px-4 mb-14'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-8 pt-10 text-4xl font-thin tracking-tight sm:text-5xl md:text-6xl lg:mt-16 lg:text-8xl text-center lg:text-left'>
                            Yannick Blanchette
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-3xl md:text-3xl tracking-tight text-transparent'>
                            Front-End Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-4 max-w-lg py-4 font-light tracking-tight text-center lg:text-left'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 p-6 lg:p-8 flex justify-center lg:justify-end lg:mt-0'>
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{duration: 1, delay: 1.2}}
                        className='rounded-xl w-3/4 sm:w-3/4 lg:w-full' src={profilePic} alt="Yannick Blanchette" />
                </div>
            </div>
        </div>
    )
}

export default Hero