'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Bars4Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'

import { motion } from "framer-motion"

const Navbar = () => {
    const [isMobileNavOpen, setMobileNav] = useState<boolean>(false)

    const toggleMenu = () => setMobileNav(prev => !prev);



  return (
    <>
        <div className='flex justify-between items-center px-12 py-6 border-b'>
            <Link href = "/">
                <Image 
                    src = "/logo.svg"
                    alt='company logo'
                    width={225}
                    height={75}
                    className=''
                />
            </Link>

            <div className='flex gap-6'>
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
                <div className='space-x-8'>
                <motion.button 
                    className="px-4 py-2 border border-2 border-brandBlue text-black font-medium rounded-lg "
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: .95}}
                    transition={{ duration: 0.2 }}
                >
                    <Link href = "/learn">Sign in</Link>
                </motion.button>
                <motion.button 
                    className="px-4 py-2 bg-brandBlue text-white font-medium rounded-lg "
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: .95}}
                    transition={{ duration: 0.2 }}
                >
                    <Link href = "/learn">Sign Up</Link>
                </motion.button>
                </div>
                
            </div>
            
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
