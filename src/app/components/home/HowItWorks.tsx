import Image from "next/image"

const HowItWorks = () => {
  return (
    <section className="py-10 mt-12">
        <div className="flex justify-evenly">
            <div className="max-w-sm bg-white shadow-lg flex flex-col p-8 items-center rounded-lg space-y-4 border border-gray-200">
                <h4 className="text-lg font-semibold text-brandBlue">Step #1</h4>
                <h3 className="text-2xl font-bold text-gray-800">Learn the Basics</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                    If you’re new to web development, start by gaining a basic understanding of HTML, CSS, and JavaScript. 
                    A solid grasp of syntax and structure is essential before diving into component creation. We recommend reviewing 
                    the <a href = "https://developer.mozilla.org/en-US/" className="underline text-brandOrange font-medium">MDN Web Docs</a> or <a href = "https://www.w3schools.com/" className="underline text-brandOrange font-medium">W3Schools</a> as a starting point. Once you’re comfortable with the basics, come back here and get 
                    ready to put your skills into action!
                </p>
                <div className="flex space-x-4">
                    <Image 
                    src = '/html-logo.svg'
                    alt="css logo"
                    width={30}
                    height={30}
                    />
                    <Image 
                    src = '/css-logo.svg'
                    alt="css logo"
                    width={30}
                    height={30}
                    />
                    <Image 
                    src = '/js-logo.svg'
                    alt="css logo"
                    width={30}
                    height={30}
                    />
                </div>
            </div>
            <div className="max-w-sm  bg-white shadow-lg flex flex-col p-8 items-center rounded-lg space-y-4 border border-gray-200">
                <h4 className="text-lg font-semibold text-brandBlue">Step #2</h4>
                <h3 className="text-2xl font-bold text-gray-800">Hands-on Practice</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                Apply your foundational knowledge by creating web components in raw HTML, CSS, and Javascript. Start by trying on your own, and
                take a look at our tutorial if you get stuck. You will learn best practices and design patterns when following our tutorial! Before 
                diving into React, you should be able to create components in the basic languages.
                </p>
            </div>
            <div className="max-w-sm  bg-white shadow-lg flex flex-col p-8 items-center rounded-lg space-y-4 border border-gray-200">
                <h4 className="text-lg font-semibold text-brandBlue">Step #3</h4>
                <h3 className="text-2xl font-bold text-gray-800">Integreate with React</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                Now that you know the basics of creating raw components, you can look into creating them into React for faster, 
                more dynamic applications. We go over a bit of React, but we suggest running through the <a href = "https://react.dev/" className="font-semibold underline text-brandOrange">React docs</a> before starting 
                this section! Once again, try to code them in your own IDE, and come back if you get stuck. Let's learn!
                </p>
                <Image 
                    src = '/react-logo.svg'
                    alt="css logo"
                    width={60}
                    height={60}
                    />
            </div>
        </div>
        <div className="flex justify-center mt-12">
            <button className=" px-4 py-2 bg-brandBlue text-white font-bold text-xl rounded-lg">Start Learning!</button>
        </div>
        
    </section>
    
  )
}

export default HowItWorks
