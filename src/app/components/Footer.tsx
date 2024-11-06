import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center border-t '>
        <div className="flex flex-col items-center py-4 space-y-2">
            <p className='text-lg font-semibold'>Made by Sam Kotecha</p>
            <a href='https://www.linkedin.com/in/sameer-z-kotecha/'>
                <Image 
                src = "/linkedin-logo.svg"
                alt='linkedin logo'
                width={50}
                height={50}
                />
            </a>
            
            <ul className='flex items-center space-x-8'>
        <li>
            <Link
                href = "/about"
            >
                About
            </Link>
        </li>
        <li>
            <Link
                href = "/about"
            >
                Learn
            </Link>
        </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
