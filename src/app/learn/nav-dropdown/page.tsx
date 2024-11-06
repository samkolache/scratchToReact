import React from 'react'
import Link from 'next/link'
import RawNavDrop from '@/app/components/codePreviews/RawNavDrop'
import CompLayout from '@/app/components/learn/CompLayout'

const page = () => {

    const content = {
        title: "Creating a Navigation Bar with dropdown using HTML, CSS, and Javascript",
        learnPoints: [
            'DOM Manipulation and Event Handling',
            'How to use Flexbox to create the basic layout',
            'HTML Semantics',
           ' CSS Positioning'
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript",
            <>Completed the <Link href='/learn/basic-nav' className='underline'>Basic Navbar</Link> tutorial</>
        ],
        codeComponent: RawNavDrop,
        htmlTips: [
            "We are using the same HTML from our previous lesson, with a few additions. We want to create a dropdown under our blog nav-link. We will create a flex container in our <ul> to hold our Blog link and a toggle button.",
            "Within this same container, we will create our dropdown menu, which also includes an <ul> of some different nav links. The reason we created this in the same container is because of our plan to use positioning to correctly place our dropdown. More on that below!",
            "You may also notice some 'role' attributes added to our container and dropdown container. This allows screen readers to correctly identify what exactly our elements do."
        ],
        cssTips: [
            "We also have the same CSS but with a few changes. Our flex container mentioned previously is created with the 'nav-dropdown' class, with our basic flexbox styling.",
            "For our dropdown menu, we create a class called 'dropdown', with some good old styling and a position of absolute. If you look at our original 'right-cont' class, we added a relative positioning as well. This will allow us to position our dropdown menu relatively to our container.",
            "Our dropdown menu also has a class of close, which will be an added default class to hide our dropdown menu(more on this in JS). We also have a 'rotate' class that will be used to rotate the toggle button.",
            "We also add some basic styling to our nav-links, to make sure they look organized."
        ],
        jsTips: [
            "Our JS is fairly simple, we use the query and ID DOM selectors to store our HTML elements in JS variables. Our elements include the dropdown menu, our toggle button(blog div), and our SVG chevron.",
            "We add a simple eventListener that toggles and untoggles the close class whenever our toggle button is clicked. We will also toggle the rotate class we had before to show the menu is open. That's it, simple right?",
        ],
        resources: [
            <> <a href = "https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp" className='underline'>W3 Schools on how to create a navbar with dropdown</a> </>,
            <> <a href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" className='underline'>MDN Web Docs on the DOM</a> </>,
        ]
    }

  return (
    <div>
    <CompLayout content={content} />
    </div>
  )
}

export default page
