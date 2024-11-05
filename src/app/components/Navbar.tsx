'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Bars4Icon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'

const Navbar = () => {
    const [isMobileNavOpen, setMobileNav] = useState<boolean>(false)

    // Toggles between true and false with a callback function
    const toggleMenu = () => setMobileNav(prev => !prev);



  return (
    <>
        {/* // Container */}
        <div className='flex justify-between items-center px-12 py-6'>

    {/* Logo */}
    <Image 
            src = "/logo.svg"
            alt='company logo'
            width={225}
            height={75}
            className=''
        />

    {/* Nav items */}
    <ul className='items-center space-x-8 text-gray-600 hidden md:flex'>
        <li>
            <Link
                href = "/about"
            >
                About
            </Link>
        </li>
        <li>
            <Link
                href = "/learn"
            >
                Learn
            </Link>
        </li>
        <li>
            <Link
                href = "/about"
            >
                Contact
            </Link>
        </li>
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
