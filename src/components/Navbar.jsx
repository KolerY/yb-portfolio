import React from 'react'
import logo from '../assets/logo-yb.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex-shrink-0'>
                <a href="./index.html"><img src={logo} alt="Logo" className='w-auto h-14 md:h-16' /></a>
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/yannick-blanchette-090746301/" target="_blank"><FaLinkedin className='hover:text-purple-900'/></a>
                <a href="https://github.com/KolerY" target="_blank"><FaGithub className='hover:text-purple-900'/></a>
                <a href="https://x.com/KOLER1337" target="_blank"><FaSquareXTwitter className='hover:text-purple-900'/></a>
            </div>
        </nav>
    )
}

export default Navbar;