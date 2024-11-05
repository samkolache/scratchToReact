import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex flex-col min-h-screen space-y-5 border-r w-64 p-4'>
        <h2 className='text-xl font-bold' >Components List</h2>
        <div>
            <h3 className='text-lg font-semibold'>Navigation</h3>
            <ul className='pl-4'>
                <li><Link href = "/learn/basic-nav">Basic NavBar</Link></li>
                <li><Link href = "/learn/nav-dropdown">NavBar with Dropdown</Link></li>
                <li><Link href = "/learn/sidebar">Sidebar</Link></li>
                <li><Link href = "/learn/tabs">Tabs</Link></li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>Form Components</h3>
            <ul className='pl-4'>
                <li><Link href = "/learn/dropdown">Dropdown Menu</Link></li>
                <li><Link href = "/learn/date-picker">Date Picker</Link></li>
                <li><Link href = "/learn/form-validation">Form Validation</Link></li>
                <li><Link href = "/learn/text-input">Text Input</Link></li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-semibold'>Data Display</h3>
            <ul className='pl-4'>
                <li><Link href = "/learn/card">Card</Link></li>
                <li><Link href = "/learn/modal">Modal</Link></li>
                <li><Link href = "/learn/accordion">Accordion</Link></li>
                <li><Link href = "/learn/tooltip">Tooltip</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
