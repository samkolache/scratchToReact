import React from 'react'
import CodePreviewLayout from '@/components/learn/CodePreviewLayout';
import CompLayout from '@/components/learn/CompLayout';


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
            <div class="right-cont">
                <ul class="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
                <div class="button-cont">
                    <button class="sign-in-btn">Sign in</button>
                    <button>Sign up</button>
                </div>
            </div>
            <span class="hamburger">&#9776;</span>
        </nav>
        <div class="mobile-nav">
            <ul class="mobile-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
            <div class="button-cont">
                <button class="sign-in-btn">Sign in</button>
                <button>Sign up</button>
            </div>
            <span class="close-btn">&times</span>
        </div>
        <script src="script.js"></script>
    </body>
    </html>`;
    
    const cssCode = `
    
    * {
    margin: 0;
    padding: 0;
    }
    nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px
    }
    
    a {
    all: unset;
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
    
    .right-cont {
    display: flex;
    align-items: center;
    gap: 40px;
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
    
    .hamburger {
    font-size: 25px;
    display: none;
    cursor: pointer;
    }
    
    .mobile-nav {
    background-color: #bebebe;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
    min-width: 18rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    position: absolute;
    top:0;
    right:0;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: none;
    }
    
    .mobile-nav.active {
    display: flex;
    transform: translateX(0);
    }
    
    .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    }
    
    
    .mobile-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    font-size: 28px;
    gap: 40px;
    padding-top: 20px;
    }
    
    @media (max-width: 768px) {
    .right-cont {
        display: none;
    }
    
    .hamburger {
        display: block;
    }
    
    .mobile-nav {
        display: flex;
    }
    }`
    
    const jsCode = `
    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const mobileNav = document.querySelector(".mobile-nav");
        const closeBtn = document.querySelector(".close-btn");
    
        // Open mobile nav on hamburger click
        hamburger.addEventListener("click", () => {
            mobileNav.classList.add("active");
        });
    
        // Close mobile nav on close button click
        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });
    
        // Close mobile nav if screen is resized to a larger width
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                mobileNav.classList.remove("active");
            }
        });
    });
    
    `
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
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} js = {jsCode} /></>,
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
