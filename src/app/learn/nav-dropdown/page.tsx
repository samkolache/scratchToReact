'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import CodePreviewLayout from '@/app/components/learn/CodePreviewLayout'
import CompLayout from '@/app/components/learn/CompLayout'

const Page = () => {

  const [isReact, setIsReact] = useState(false)


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
        <div class="right-cont">
          <ul class="nav-links">
            <li role="none"><a href="/home" role="menuitem">Home</a></li>
            <li role="none"><a href="/about" role="menuitem">About</a></li>
            <li role="none">
              <div class="nav-dropdown" role="button">
                <a href="/blog" role="menuitem">Blog</a>
                <svg id="chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15px" height="15px">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                <div class="dropdown close" role="dropdown-menu">
                  <ul class="drop-links ">
                    <li><a href="/item-1">Item #1</a></li>
                    <li><a href="/item-2">Item #2</a></li>
                    <li><a href="/item-3">Item #3</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div class="button-cont">
            <button class="sign-in-btn">Sign in</button>
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
        box-sizing: border-box;
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

    const reactCode = ``

    const content = {
        title:  isReact ? "Creating a Navigation Bar with a dropdown using React and TailwindCSS" : "Creating a Navigation Bar with a dropdown using HTML, CSS, and Javascript",
        learnPoints: isReact ?
        [
          "How useState works in React",
          "How to pass state through props",
          "How to use components to create reusable code"
        ]
        :
        [
            'DOM Manipulation and Event Handling',
            'How to use Flexbox to create the basic layout',
            'HTML Semantics',
           ' CSS Positioning'
        ],
        prereqs: isReact ?
        [
          "HTML, CSS, and Javascript",
          "Basic knowledge of React",
          "Basic knowledge of State"
        ]
        :
        [
            "Basic HTML, CSS, and Javascript",
            <>Completed the <Link href='/learn/basic-nav' className='underline'>Basic Navbar</Link> tutorial</>
        ],
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} js = {jsCode} /></>,
        htmlTips: [
            "If you haven't already, check out the previous tutorial, as we won't go over any repeated information. Ready? Let's hop in!",
            "Our first change is creating our dropdown menu item, we create a <div> called 'nav-dropdown'. For accessibility purposes, we will give this div the role of 'button' so assistive technology knows it should be clicked. I added an chevron SVG here, but you can use a icon library to import your icon.",
            "The last major change is actually creating our dropdown menu. We will create a <div> with the class 'dropdown' and the role of 'dropdown-menu'. We'll add an unorded list to keep the same pattern and we will style accordingly. If you're confused about the class 'close', don't worry, we'll discuss that in our CSS section."
        ],
        cssTips: [
            "Using the same CSS file as 'basic nav', we first modify our 'right-cont' to have a position of relative. We do this so we can position our dropdown absolutely to it(check out the resources if you don't get this concept yet). Our newly created 'nav-dropdown' container will be a flex continer to position the text and chevron next to each other. We will also add a modifier/state class called 'rotate' to change the chevron's direction when the dropdown is opened.",
            "To style our actual dropdown menu, let's add a grey background, a nice curved border, some padding, and a width. We will add a modifer/state class called 'close' to hider our dropdown initially.",
            "Then finally, for our actual links, we will make our <ul> a flex container once again! This time, however, we will align our items vertically, instead of horizontal."
        ],
        jsTips: [
          "We have some fairly simple JS to go over. Let's first first do some DOM referencing, by storing our dropdown, blog nav item, and our chevron",
          "Then, all we have to do is add a click event to our blog nav item to toggle some classes. By default, we have the close class on our dropdown menu and no class on our chevron. Every time we click on our nav-item, we will toggle these classes to hide/show the dropdown menu and rotate the chevron",
          "That's it, congrats!"

        ],
        resources: [
            <> <a href = "https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp" className='underline'>W3 Schools on how to create a navbar with dropdown</a> </>,
            <> <a href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" className='underline'>MDN Web Docs on the DOM</a> </>,
        ]
    }

  return (
    <div>
    <CompLayout content={content} isReact = {isReact} setIsReact ={setIsReact} reactStatus={true} />
    </div>
  )
}

export default Page
