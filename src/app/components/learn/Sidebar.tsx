import React from 'react'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/16/solid'

const Sidebar = () => {
  return (
    <div className='flex flex-col min-h-screen space-y-5 border-r w-72 p-4'>
        <h2 className='text-xl font-bold' >Components List</h2>
        <div>
            <h3 className='text-lg font-semibold'>Navigation</h3>
            <ul className='pl-2'>
                <li className='flex items-center gap-2'>
                    <StarIcon className='w-4 h-4 text-yellow-500' />
                    <Link href = "/learn/basic-nav">Basic NavBar</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <StarIcon className='w-4 h-4 text-yellow-500' />
                    <Link href = "/learn/nav-dropdown">NavBar with Dropdown</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <StarIcon className='w-4 h-4 text-yellow-500' />
                    <Link href = "/learn/resp-nav">Responsive Navbar</Link>
                </li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>Data Display</h3>
            <ul className='pl-2'>
                <li className='flex items-center gap-2'>
                    <StarIcon className='w-4 h-4 text-yellow-500' />
                    <Link href = "/learn/card">Card</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <StarIcon className='w-4 h-4 text-yellow-500' />
                    <Link href = "/learn/modal">Modal</Link>
                </li>
                <li className='flex items-center gap-2'>
                    <StarIcon className='w-4 h-4 text-yellow-500' />
                    <Link href = "/learn/accordion">Accordion</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar