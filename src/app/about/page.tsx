'use client'
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {motion} from 'framer-motion'
import Link from 'next/link';


const About = () => {
  return (
    <>
      <section className='py-10 mt-12 px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between place-items-center'>
          <div className=''>
            <p className='mb-4'>ABOUT SCRATCHTOREACT</p>
            <h1 className='text-6xl font-bold'>Empowering Future Web Developers with the Skills to Succeed</h1>
          </div>
          <DotLottieReact
          src="https://lottie.host/5e97ff64-4931-4856-aea5-3812d161ca48/WjZD7kfKam.lottie"
          loop
          autoplay
          style={{ width: 500, height: 500 }}
          className=''
          />
        </div>
        
        
        
      </section>

      <section className='max-w-[1800px] py-10 px-12'>
        <div className='max-w-4xl'>
          <p className='mb-4'>VISION</p>
          <h2 className="text-5xl font-bold">Pioneering Practical, Hands-On Web Development Learning</h2>
        </div>
        <hr className='my-12 border-black border-1' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-24 py-4'>
          <div className=''>
            <h2 className="text-5xl font-bold mb-4">Learn.Build.Evolve</h2>
            <p className='text-lg'>Explore our three-step formula for learning web development, designed to guide you at any stage of your journey. </p>
          </div>
          <ol className='list-decimal  text-3xl font-medium'>
            <li className='mb-4'>Master the basics</li>
            <li className='mb-4'>Build some components</li>
            <li>Use your foundations to build dynmic UI with React and Tailwind</li>
          </ol>
        </div>
        <hr className='my-12 border-black border-1' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-24 py-4 '>
          <div className='space-y-8'>
            <h2 className="text-5xl font-bold">Ready to learn?</h2>
            <p className="text-lg">Ready to put your HTML, CSS, and JavaScript basics to work? Let’s start building!</p>
            <motion.button 
                className="px-4 py-4 bg-brandBlue text-white font-medium rounded-lg "
                whileHover={{scale: 1.05}}
                whileTap={{scale: .95}}
                transition={{ duration: 0.2 }}
                >
                  <Link href = "/learn">Start learning for free</Link>
              </motion.button>
          </div>
        </div>
        
      </section>
      

    </>
  )
}

export default About
