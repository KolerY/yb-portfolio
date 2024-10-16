import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Vuelogo from "../assets/Vue.js_Logo_2.svg.png"
import { FaAngular } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24 mt-24'>
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={Vuelogo} alt="logo vue" className="w-20 h-18" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaAngular className='text-7xl text-red-700' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPhp className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-7xl text-orange-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-blue-700' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaSass className='text-7xl text-pink-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies;