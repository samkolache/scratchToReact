import React from 'react'
import Sidebar from '../components/learn/Sidebar'
import FAQ from '../components/learn/FAQ'

const Learn = () => {
  return (
    <>
      <section className='max-w-4xl mx-auto space-y-4 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl sm:text-5xl font-bold text-center'>Let's start learning!</h1>
        <p className='text-base sm:text-lg text-center'>
          Use the sidebar on the left to navigate between different components. You will learn to create these components both in raw 
          <span className='text-brandOrange font-semibold'> HTML</span>, 
          <span className='text-brandBlue font-semibold'> CSS</span>, 
          <span className='text-brandYellow font-semibold'> JS</span> and 
          <span className='text-brandLightBlue font-semibold'> React JS</span>.
        </p>
        <p className='font-light text-sm sm:text-base text-center'>
          * Before diving into these sections, make sure you have a basic understanding of HTML, CSS, and JS. Once you learn how to code these components from scratch, you can learn how it works in React!
        </p>
      </section>

      <section className='mt-8 py-8 sm:py-12'>
        <div className='max-w-4xl mx-auto space-y-4 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl sm:text-4xl font-semibold text-center'>Helpful Tips</h2>
          <FAQ />
        </div>
      </section>
    </>
  )
}

export default Learn
