'use client'
import React, {useState} from 'react'
import CompLayout from '@/components/learn/CompLayout';
import { useTutorialContext } from '@/contexts/TutorialContext'


const Page = () => {

    const { isReactMode } = useTutorialContext()

 
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
        <a href = "/">Logo</a>
        
        <div class = "right-cont"> 
            <ul role = "menubar">
              <li role="none"><a href = "/home" role="menuitem">Home</a></li>
              <li role="none"><a href = "/about" role="menuitem">About</a></li>
              <li role="none"><a href = "/blog" role="menuitem">Blog</a></li>
            </ul>
        <div class = "button-cont">
            <button class = "sign-in-btn">Sign in</button>
            <button>Sign up</button>
        </div>
        </div>
    </nav>
    </body>
    </html>`;
    
    const cssCode = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px
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
    
    ul {
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
    }`
    const reactCode = `import React from 'react'
import "./App.css";


const page = () => {
  return (
    <nav className= "flex items-center justify-between py-4 px-6 border-b">
      <a href="/" className="logo">Logo</a>
      <ul className="flex gap-6" role='menubar'>
        <Navlinks href="/about" name="Home" />
        <Navlinks href="/about" name="About" />
        <Navlinks href="/about" name="Blog" />
      </ul>
      <div className="flex gap-4">
        <button className='border border-black rounded-md px-4 py-2'>Sign in</button>
        <button className='bg-blue-600 text-white rounded-md px-4 py-2'>Sign out</button>
      </div>
    </nav>
  );
};

const Navlinks = ({ href, name }) => {
  return (
    <li role='none'>
      <a className="hover:underline" href={href} role='menuitem'>
        {name}
      </a>
    </li>
  );
};

export default page;

`



    const content = {
        title: isReactMode ? "Creating a Navigation bar using React and TailwindCSS" : "Creating a Navigation Bar using HTML and CSS",
        learnPoints: isReactMode
        ? [
            "How to use components to create reusable code",
            "How to pass props between components",
          ]
        : [
            "Proper HTML semantics for creating a NavBar",
            "How to use Flexbox to create the basic layout",
          ],
        prereqs: isReactMode 
        ?
        [
            "HTML, CSS, and Javascript",
            "Basic React"
        ]
        :
        [
          "Basic HTML and CSS"
        ],
        html: isReactMode ? undefined : htmlCode,
        css: isReactMode ? undefined : cssCode,
        js: undefined, 
        react: isReactMode ? reactCode : undefined,
        htmlTips: isReactMode 
        ?
        [
          "Our JSX is quite similar to the vanilla HTML markup from before, but we've made our code more efficient and reusable by introducing a custom component, <Navlinks />, within our <nav> element",
          "Instead of repeating the same markup for each navigation link, we’ve created a single <Navlinks /> component. This component accepts two props: href, which specifies the URL the link points to, and name, which is the text displayed for the link. By passing these props when initializing the component, we can dynamically render three instances of <Navlinks /> for 'Home,' 'About,' and 'Blog,' without duplicating code."
        ]
        :
        [
          "Let's start with semantics, our navbar will be contained in the HTML tag <nav>. This allows screen readers and other assistive technologies to recognize where the navigation bar is.",
          "Everything that should redirect the user(nav-links) will be wrapped in a <a> which will define our hyperlinks. You will notice our navigation links are an unordered list, <ul>. Back to semantics, this shows assistive technology that we have a group of links. This also makes our code easier to read, instead of using tons of <div>s.",
          "Within our unordered list, we add ARIA roles to each <li> and <a> tag. We need to tell assistive technologies this isn't just a list, rather, they are navigation items. We give 'none' to <li> to show they have no purpose, and 'menuitem' for each <a> to show they are menu items",
          "We will be using Flexbox to style our navbar, which is why we have two sections. Our logo will be on the left side, and our links and buttons will be on the right. That's why we contain our right side in a div with the class 'right-cont'"
        ],
        cssTips: isReactMode ?
        [
          "Our styling is very similar to the vanilla CSS, so let's just go over some new things we added.",
          "We added a border to the bottom of our navbar to make it separated from the rest of our content(even though we have nothing else). Instead of a bland grey background, we use Tailwind's built-in colors to give our 'sign in' <button> a nice blue color.",
          "Finally, we add a hover effect to underline the nav item the user is about to click on. Tailwind makes this so easy with the built in 'hover:' class."
        ]
        :
        [
            "Let's reset some styles globally so we don't have unpredictable behavior. If you don't understand why we do this, check out the first link in the resources below.",
            "We will make our <nav> a flex container, this will affect its direct children(our logo and right-cont <div>). We will center our children and use 'justify-between' to create space in the middle. Add some padding and we have created our outer flex layout, great work!",
            "For our <a> tags, we will erase its default styling to make it look cleaner. We will also do this for our <ul> tag as well.",
            "We need to create another flex layout, this time, on our 'right-cont' <div>. We will make it a flex container, align the items vertically, and add a bit of space. Now within our 'right-con' <div>, we have two more flex layouts, flexception! Both our <ul> and 'button-cont' <div> will be flex containers with some gap.",
            "Finally, we'll add some styles to both of our buttons and style our sign-in <button> with no background. That's it!"
        ],
        resources: isReactMode ?  
        [
          <> <a href = "https://react.dev/" className='underline'>The offcial React Docs</a> </>,
          <> <a href = "https://v2.tailwindcss.com/docs" className='underline'>The offcial Tailwind Docs</a> </>

        ]
        :
        [
            <> <a href = "https://css-tricks.com/box-sizing/?utm_source=chatgpt.com" className='underline'>CSS Tricks on the box-sizing style</a> </>,
            <> <a href = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav" className='underline'>MDN Web Docs on the navigation element</a> </>,
            <> <a href = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className='underline'>CSS Tricks guide on Flexbox</a> </>

        ]
    }


  return (
    <CompLayout content={content} reactStatus={true} />
  )
}

export default Page
