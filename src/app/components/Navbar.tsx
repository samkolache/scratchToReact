'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Bars4Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'

import { motion } from "framer-motion"

const Navbar = () => {
    const [isMobileNavOpen, setMobileNav] = useState<boolean>(false)

    // Toggles between true and false with a callback function
    const toggleMenu = () => setMobileNav(prev => !prev);



  return (
    <>
        {/* // Container */}
        <div className='flex justify-between items-center px-12 py-6 border-b'>

    {/* Logo */}
    <Link href = "/">
        <Image 
            src = "/logo.svg"
            alt='company logo'
            width={225}
            height={75}
            className=''
        />
    </Link>

    {/* Nav items */}
    <ul className='items-center space-x-8 text-gray-600 hidden md:flex text-lg'>
        <motion.li
        whileHover={{scale: 1.15}}
        whileTap={{scale: .95}}
        transition={{ duration: 0.2 }}
        >
            <Link
                href = "/about"
            >
                About
            </Link>
        </motion.li>
        <motion.li
        whileHover={{scale: 1.15}}
        whileTap={{scale: .95}}
        transition={{ duration: 0.2 }}
        >
            <Link
                href = "/learn"
            >
                Learn
            </Link>
        </motion.li>
    </ul>
    <Bars4Icon 
    className="w-5 h-5 md:hidden cursor-pointer" 
    onClick={toggleMenu}
    />
        </div>
        <MobileNav isMobileNavOpen = {isMobileNavOpen} toggleMenu = {toggleMenu} />
    </>
    
    
  )
}

export default Navbar
