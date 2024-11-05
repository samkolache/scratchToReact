'use client'
import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

const FAQ = () => {
    return (
    <div className=''>
      <FaqItem question = "Getting started" ans = "If you’re not already familiar, start by strengthening your fundamentals in HTML, CSS, and JavaScript. There are plenty of resources available online, including documentation and YouTube tutorials. Once you grasp the basic syntax, come back and try building some components yourself! You’ll learn best by doing—focus on coding and experimenting rather than just reading" />
      <FaqItem question = "Break down the component" ans = "When building a component, break it down into small steps. Start by planning the structure in HTML, add styles with CSS, and finally, add interactivity with JavaScript or React." />
      <FaqItem question = "Embrace dev tools" ans = "Use your browser’s developer tools to debug and test your code. Inspect elements, check styles, and use the console to catch errors and troubleshoot issues.." />
      <FaqItem question = "Don't memorize, understand" ans = "Use your browser’s developer tools to debug and test your code. Inspect elements, check styles, and use the console to catch errors and troubleshoot issues.." />

    
    </div>
  )
}


const FaqItem = ({question, ans}) => {

    const [isDropdownOpen, setDropdown] = useState(false)

    const toggleDropdown = () => setDropdown(prev => !prev)

    return (
        <div className='max-w-lg mx-auto'>
        <div className='flex items-center justify-between  px-2 py-4 border-b'>
            <h3 className='text-2xl'>{question}</h3>
            <ChevronDownIcon 
            className = {clsx(
                'w-5 h-5 cursor-pointer', 
                {
                    'rotate-180': isDropdownOpen
                }
            )}
            onClick={toggleDropdown}
            />
        </div>
        <p 
        className = {clsx(
            'p-4 border-b bg-slate-50',
            {
                'hidden': !isDropdownOpen,
                'block': isDropdownOpen
            }
        )}>{ans}
        </p>
      </div>
    )
}

export default FAQ
