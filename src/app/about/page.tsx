import React from 'react'

const About = () => {
  return (
    <>
      <section className='py-10 mt-12 px-4 md:px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
            Here to help you learn, <span className='text-brandBlue'>the right way</span>
          </h1>
          <p className='text-base md:text-lg mt-4'>
            Many people dive into React without a solid grasp of fundamental web development. This site is here 
            to bridge that gap. Each lesson walks you through creating essential components in vanilla HTML, CSS, and JavaScript, and 
            then demonstrates how to build the same components in React. You&apos;ll see firsthand how React simplifies component creation, 
            making development faster and more efficient.
          </p>
        </div>
      </section>

      <section className='py-10 mt-8 px-4 md:px-6'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-2xl md:text-3xl font-semibold'>What you can expect to learn</h2>
          <hr className='my-4' />
          <p className='text-sm md:text-base mt-4'>
            You must know the basic syntax of vanilla HTML, CSS, and JS, as well as React. There may be syntax that you don't know, and that's okay!
            The goal is to understand different design patterns and get better at creating components from scratch.
          </p>
          <p className='text-sm md:text-base mt-4'>
            The tutorials will not have pretty-looking components. As mentioned, the main goal is to understand how to layout components and use JavaScript to add interactivity.
          </p>
          <p className='text-sm md:text-base mt-4'>
            Make sure to attempt the design yourself first. Each tutorial provides a preview of what it should look like, so try not to peek at the code!
          </p>
          <p className='text-sm md:text-base mt-4'>
            Don't stress if it takes you a while to understand the concepts. Each tutorial has resources below to help you dive deeper. Happy coding!
          </p>
        </div>
      </section>
    </>
  )
}

export default About
