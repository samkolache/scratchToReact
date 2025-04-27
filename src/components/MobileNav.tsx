import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

type MobileNavProps = {
    isMobileNavOpen: boolean;
    toggleMenu: () => void;
};

const MobileNav = ({ isMobileNavOpen, toggleMenu }: MobileNavProps) => {

    return (
    <div className = {clsx(
        "min-h-screen w-1/2 absolute right-0 top-0 md:hidden transform transition-transform duration-300 ease-in-out",
        {
            "translate-x-full": !isMobileNavOpen,
            "translate-x-0": isMobileNavOpen
        }
    )}>
        <ul className='flex flex-col space-y-12 bg-gray-50  text-[26px] min-h-screen p-6'>
            <XMarkIcon 
            className='w-8 h-8 cursor-pointer'
            onClick={toggleMenu} />
            <li className="flex justify-between items-center">
                <Link
                    href = "/about"
                    className= 'block w-full'
                >
                    About
                </Link>
                <ArrowRightCircleIcon className='w-7 h-7' />
            </li>
            <li className="flex justify-between items-center">
                <Link
                    href = "/about"
                    className= 'block w-full'
                >
                    Learn
                </Link>
                <ArrowRightCircleIcon className='w-7 h-7' />
            </li>
        </ul>
    </div>
  )
}

export default MobileNav
