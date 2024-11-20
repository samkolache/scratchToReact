"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-16 mt-12 md:px-8">
      <HowItWorksGraph />
    </section>
  );
};

const HowItWorksGraph = () => {
  const [selected, setSelected] = useState(0);

  const steps = [
    {
      title: "Learn the basics",
      step: 1,
      content:
        "If you’re new to web development, start by gaining a basic understanding of HTML, CSS, and JavaScript. A solid grasp of syntax and structure is essential before diving into component creation. We recommend reviewing the MDN Web Docs or W3Schools as a starting point. Once you’re comfortable with the basics, come back here and get ready to put your skills into action!",
      images: (
        <>
          <Image src="/html-logo.svg" alt="HTML logo" width={50} height={50} />
          <Image src="/css-logo.svg" alt="CSS logo" width={50} height={50} />
          <Image src="/js-logo.svg" alt="JS logo" width={50} height={50} />
        </>
      ),
    },
    {
      title: "Hands-on practice",
      step: 2,
      content:
        "Apply your foundational knowledge by creating web components in raw HTML, CSS, and JavaScript. Start by trying on your own, and refer to our tutorial if you get stuck. You will learn best practices and design patterns when following our tutorial! Before diving into React, you should be able to create components in these basic languages.",
      images: (
        <>
          <Image src="/web.svg" alt="JS logo" width={50} height={50} />
        </>
      ),
    },
    {
      title: "Now time for React & Tailwind!",
      step: 3,
      content:
        "Now that you know the basics of creating raw components, you can start building them in React for faster, more dynamic applications. We cover a bit of React here, but we suggest going through the React docs first! Try coding in your own IDE, and come back if you get stuck. Let's learn!",
      images: (
        <>
          <Image src="/react-logo.svg" alt="JS logo" width={50} height={50} />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto items-center justify-between px-12">
        <div className="space-y-16">
          <h2 className="text-5xl font-medium">How it works</h2>
          <div className="relative">
            <div
              className="absolute top-8 left-7 w-0.5 bg-black z-0"
              style={{ height: "calc(100% - 4rem)" }}
            ></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                onClick={() => setSelected(step.step - 1)}
                className={clsx(
                  "flex items-center gap-4 relative z-10 cursor-pointer",
                  {
                    "mt-24": index !== 0,
                  }
                )}
                animate={
                  selected === index
                    ? { y: [0, -10, 0] } // Bouncing animation
                    : { y: 0 }
                }
                transition={
                  selected === index
                    ? { duration: 0.5, repeat: Infinity, repeatType: "loop" }
                    : { duration: 0 }
                }
              >
                <span
                  className="w-14 h-14 bg-brandBlue rounded-full flex items-center justify-center text-white text-xl"
                >
                  {step.step}
                </span>
                <h3 className="text-2xl">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative p-8 rounded-lg overflow-hidden"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "8px",
          }}
          animate={{
            boxShadow: [
              "0 0 0 2px #264DE4",
              "0 0 0 2px #E34C26",
              "0 0 0 2px #53C1DE",
              "0 0 0 2px #F7DF1E",
              "0 0 0 2px #264DE4",
            ],
          }}
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {/* Content */}
          <p className="text-lg">{steps[selected].content}</p>
          <div className="flex gap-6 justify-center mt-8">{steps[selected].images}</div>
        </motion.div>


      </div>
    </>
  );
};

export default HowItWorks;
