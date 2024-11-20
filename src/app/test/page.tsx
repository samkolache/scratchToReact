'use client'
import React from 'react'
import {motion} from "framer-motion"

const page = () => {
    const textOne = "Level up as a web dev".split(" ")
  return (
    
    <h1 className="text-3xl md:text-6xl font-bold">
      {textOne.map((el, i) => (
              <motion.span
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition={{
                duration: .25,
                delay: i/10
              }}
              key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
    </h1>
  )
}

export default page
