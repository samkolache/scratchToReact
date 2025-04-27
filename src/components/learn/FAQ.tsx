'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

const FAQ = () => {
  return (
    <div className='space-y-4'>
      <FaqItem 
        question="Getting started" 
        ans="If you’re not already familiar, start by strengthening your fundamentals in HTML, CSS, and JavaScript. There are plenty of resources available online, including documentation and YouTube tutorials. Once you grasp the basic syntax, come back and try building some components yourself! You’ll learn best by doing—focus on coding and experimenting rather than just reading." 
      />
      <FaqItem 
        question="Break down the component" 
        ans="When building a component, break it down into small steps. Start by planning the structure in HTML, add styles with CSS, and finally, add interactivity with JavaScript or React." 
      />
      <FaqItem 
        question="Embrace dev tools" 
        ans="Use your browser’s developer tools to debug and test your code. Inspect elements, check styles, and use the console to catch errors and troubleshoot issues." 
      />
      <FaqItem 
        question="Don't memorize, understand" 
        ans="Attempt to build the component yourself, then come back if you get stuck. Understand why we are using Flexbox rather than Grid, etc." 
      />
    </div>
  )
}

const FaqItem = ({ question, ans }) => {
  const [isDropdownOpen, setDropdown] = useState(false)

  const toggleDropdown = () => setDropdown(prev => !prev)

  return (
    <div className='max-w-lg mx-auto'>
      <div className='flex items-center justify-between px-4 py-4 border-b cursor-pointer' onClick={toggleDropdown}>
        <h3 className='text-lg sm:text-2xl font-semibold'>{question}</h3>
        <ChevronDownIcon 
          className={clsx('w-5 h-5 transition-transform duration-200', {
            'rotate-180': isDropdownOpen
          })}
        />
      </div>
      <p 
        className={clsx(
          'px-4 py-2 border-b bg-slate-50 transition-all duration-200',
          {
            'hidden': !isDropdownOpen,
            'block': isDropdownOpen
          }
        )}
      >
        {ans}
      </p>
    </div>
  )
}

export default FAQ
