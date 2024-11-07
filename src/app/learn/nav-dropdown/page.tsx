import React from 'react'
import Link from 'next/link'
import CodePreviewLayout from '@/app/components/learn/CodePreviewLayout'
import CompLayout from '@/app/components/learn/CompLayout'

const page = () => {


    const htmlCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Static Site</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <nav>
            <p>Logo</p>
            <div class = "right-cont">
              <ul class = "nav-links">
                <li><a href = "/home">Home</a></li>
                <li><a href = "/about">About</a></li>
                <li>
                  <div class = "nav-dropdown" role = "button">
                     <a href = "/blog">Blog</a>
                     <svg id = "chevron" xmlns="http://www.w3.org/2000/svg" 
                     fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                     width = "15px" height = "15px">
                        <path stroke-linecap="round" stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div class="dropdown close" role = "dropdown-menu">
                      <ul class = "drop-links ">
                         <li><a href = "/item-1">Item #1</a></li>
                         <li><a href = "/item-2">Item #2</a></li>
                         <li><a href = "/item-3">Item #3</a></li>
                      </ul>
                   </div>
                  </div>
              </li>
              </ul>
              <div class = "button-cont">
                <button class = "sign-in-btn">Sign in</button>
                <button>Sign up</button>
              </div>
            </div>
        </nav>
    <script src="script.js"></script>
    </body>
    </html>`;
    
    const cssCode = `* {
        margin: 0;
        padding: 0;
      }
      
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px
      }
      
      a {
        text-decoration: none;   
        color: inherit; 
        cursor: pointer;
      }
      
      nav > p {
        font-weight: bold;
        font-size: 20px;
        cursor: pointer
      }
      
      .nav-links {
        list-style: none;
        display: flex;
        gap: 30px;
        font-weight: semi-bold;
      }
      
      .nav-dropdown {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
      }
      
      .rotate {
        transform: rotate(180deg);
      }
      
      
      .right-cont {
        display: flex;
        align-items: center;
        gap: 40px;
        position: relative;
      }
      
      .button-cont {
        display: flex;
        gap: 10px;
      }
      
      .sign-in-btn {
        border: 1px solid;
        background: none;
      }
      
      button {
        padding: 8px 16px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
      
      .dropdown {
        background-color: #f5f5f5;
        border-radius: 10px;
        max-width: 6rem;
        padding: 10px 10px;
        position: absolute;
        top:40px;
      }
      
      .dropdown.close {
        display: none;
      }
      
      .drop-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        font-weight: semi-bold;
      }`
    
    
    const jsCode = `const dropdown = document.querySelector('.dropdown') 
    const blogItem = document.querySelector('.nav-dropdown') 
    const chevron = document.getElementById('chevron')
    
    blogItem.addEventListener("click", (e) => {
      dropdown.classList.toggle("close");
      chevron.classList.toggle("rotate");
    })`

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
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} js = {jsCode} /></>,
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
