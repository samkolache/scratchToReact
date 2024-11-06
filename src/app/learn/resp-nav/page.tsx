import React from 'react'
import RawRespNavbar from '@/app/components/codePreviews/RawRespNavbar';
import CompLayout from '@/app/components/learn/CompLayout';


const page = () => {
    const content = {
        title: "Creating a Responsive Navigation Bar with HTML, CSS, and Javascript",
        learnPoints: [
            'Proper HTML semantics for creating a NavBar',
            'How to use flexbox to create the basic layout',
            'DOM Manipulation',
            'CSS Media Queries/Responsiveness'
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript",
            "Some knowledge on media queries",
            <>Completed the <a href = "/learn/nav-dropdown" className='underline'>Navbar with Dropdown</a> tutorial</>
        ],
        codeComponent: RawRespNavbar,
        htmlTips: [
            "Keeping the same code from our original Navbar, we will add a few things. First, a hamburger menu at the end of our <nav> tag. Second, a mobile nav will appear once we click on the hamburger menu. Both of these will be hidden and only appear at the correct screen size!"
        ],
        cssTips: [
            "We will style our mobile nav container to look like a mobile menu, using Flexbox to create the base layout. We will position the menu absolute to the viewport, pushing it all the way to the top right(where it will appear when summoned). The menu will be hidden by default.",
            "We will create an active class as well for our mobile nav to appear when clicked.",
            "Now, our media queries! This will control what we will see with different screen sizes. The one we created translates too: anything below 768px, hide our right navigation links, show the hamburger menu(hidden by default), and show our mobile nav."

        ],
        jsTips: [
            "We will first store our HTML elements in the DOM: our hamburger icon, mobile nav, and close button.",
            "For both the hamburger icon and close button, we will add and remove the class respectively when each is clicked",
            "Finally, we add an event listener for our window to listen for a window resize. If our window becomes greater than 768(what we defined in our CSS), we will hide the mobile nav when it is opened."
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries" className='underline'>MDN Web Docs on CSS media queries</a> </>,
            <> <a href = "https://weavinginfluence.com/influence-building/the-importance-of-responsiveness/" className='underline'>Weaving Infulence on why responsiveness matters</a> </>,

        ]
    }


  return (
    <CompLayout content={content} />
  )
}

export default page
