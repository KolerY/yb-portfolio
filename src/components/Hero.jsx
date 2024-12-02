import React, { useState } from 'react'
import { HERO_CONTENT } from '../constants/index.js'
import profilePic from '../assets/profile-pic-transparent.png'
import { motion } from 'framer-motion'
import resume from '../assets/resume.png'
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
});

const Modal = ({ isOpen, onClose, resume }) => {
    if (!isOpen) return null;

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Resume.png";
        link.click();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-4xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                    aria-label="Close Modal"
                >
                    <AiOutlineClose size={20} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-bold mb-4 text-center">Curriculum Vitae</h2>

                {/* Resume Image */}
                <img
                    src={resume}
                    alt="Resume"
                    className="mb-4 w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Download Button */}
                <button
                    onClick={downloadResume}
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 mx-auto"
                >
                    <AiOutlineDownload size={20} />
                    <span>Télécharger</span>
                </button>
            </div>
        </div>
    );
};

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                        <motion.button
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            href={resume}
                            onClick={openModal}
                            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-purple-600 text-purple-600"
                        >
                            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span class="relative text-purple-600 transition duration-300 group-hover:text-white ease">Curriculum Vitae</span>
                        </motion.button>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} onClose={closeModal} resume={resume} />

                <div className='w-full lg:w-1/2 p-6 lg:p-8 flex justify-center lg:justify-end lg:mt-0'>
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className='rounded-xl w-3/4 sm:w-3/4 lg:w-full' src={profilePic} alt="Yannick Blanchette" />
                </div>
            </div>
        </div>
    )
}

export default Hero