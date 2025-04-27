'use client'
import Image from "next/image";
import {easeInOut, motion} from 'framer-motion'
import Link from "next/link";


export default function Hero  ()  {
  const textOne = "Level up as a web dev,".split(" ")
  

  return (
    <section className="py-24 mt-12 slate">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-16">
        <div>
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
          <motion.h1
            className="text-3xl md:text-6xl font-bold mt-4"
            initial={{ y: -100, scale: 1.2, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 1.25, 
              ease: [0.16, 1, 0.3, 1], 
            }}
          >
            the <span className="text-brandOrange">right</span> way
          </motion.h1>
        </div>
          <motion.div 
          className="flex items-center gap-8 max-w-lg mx-auto"
          initial = {{opacity: 0, scale: 0.95, y:20}}
          animate = {{opacity: 1, scale: 1, y:0}}
          transition={{
            duration: 0.6,
            delay: 2,
            ease: "easeOut"
          }}
          >
            <motion.button 
            className="px-4 py-4 bg-brandBlue text-white font-medium rounded-lg "
            whileHover={{scale: 1.05}}
            whileTap={{scale: .95}}
            transition={{ duration: 0.2 }}
            >
              <Link href = "/learn">Start learning for free</Link>
            </motion.button>
            <motion.button 
            className="px-4 py-4 bg-gray-700 text-white font-medium rounded-lg"
            whileHover={{scale: 1.05}}
            whileTap={{scale: .95}}
            transition={{ duration: 0.2 }}
            >
              <Link href = "/about">Learn more about us</Link>
            </motion.button>
          </motion.div>
      </div>
    </section>
  );
};


