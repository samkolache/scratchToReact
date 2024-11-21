'use client'
import React from 'react'
import FAQ from '../components/learn/FAQ'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Learn = () => {
  return (
    <>
      <section className='max-w-4xl mx-auto space-y-4 py-12'>
        <h1 className='text-4xl sm:text-5xl font-bold text-center'>Let's start learning!</h1>
        <p className='text-base sm:text-lg text-center'>Use the sidebar on the left to navigate between different components. You will learn to create these components both in</p>
          <div className='text-center'>
            <span className='text-brandOrange font-semibold'> HTML</span>, 
            <span className='text-brandBlue font-semibold'> CSS</span>, and
            <span className='text-brandYellow font-semibold'> JS</span> 
          </div>
          <div className='text-center'>
            <span className='text-brandLightBlue font-semibold '> React JS</span> and <span className='text-[#38BDF8] font-semibold'>Tailwind CSS</span>
          </div>
        <p className='font-light text-sm sm:text-base text-center'>
          * Before diving into these sections, make sure you have a basic understanding of HTML, CSS, and JS. Once you learn how to code these components from scratch, you can learn how it works in React and Tailwind CSS!
        </p>
      </section>
      <section className='px-12 py-12'>
      <h2 className='text-3xl sm:text-4xl font-bold mb-12'>Featured Tutorials</h2>
      <div className='flex gap-12 justify-center items-center'>
        <FeaturedCard path = "/learn/basic-nav" img = "/navbar-hero.svg" headline = "Dive into this tutorial to learn how to make a navigation bar!" diff = "Beginner" />
        <FeaturedCard path = "/learn/card" img = "/card-hero.svg" headline = "Jump right in and create a card component just like the one you're reading now!" diff = "Beginner" />
        <FeaturedCard path = "/learn/form" img = "/form-hero.svg" headline = "Got some data you need to collect, learn how to start with this basic form!" diff = "Intermediate" />
      </div>
      </section>
    </>
  )
}

const FeaturedCard = ({img, headline, diff, path}) => {
return (
  <Link href={path}>
    <motion.div  
    className='max-w-md border border-black rounded-lg'
    whileHover={{scale: 1.05}}
            whileTap={{scale: .95}}
            transition={{ duration: 0.2 }}
    >
        <Image 
        src = {img}
        alt='navigation bar tutorial hero'
        width = {200}
        height={200}
        className='w-full'
        
       />
       <div className='space-y-4 p-4'>
        <p>{headline}</p>
        <p className=''>{diff}</p>
       </div>
        
  </motion.div>
  </Link>
  
)
}

export default Learn


          