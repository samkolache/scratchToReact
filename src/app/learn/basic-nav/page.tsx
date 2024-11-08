import React from 'react'
import CodePreviewLayout from '@/app/components/learn/CodePreviewLayout';
import CompLayout from '@/app/components/learn/CompLayout';


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
            <ul>
            <li><a href = "/home">Home</a></li>
            <li><a href = "/about">About</a></li>
            <li><a href = "/blog">Blog</a></li>
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
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 10px
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


    const content = {
        title: "Creating a Navigation Bar with HTML and CSS",
        learnPoints: [
            'Proper HTML semantics for creating a NavBar',
        'How to use Flexbox to create the basic layout'
        ],
        prereqs: [
            "Basic HTML and CSS"
        ],
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} /></>,
        htmlTips: [
            "We first wrap our navbar in a nav container, we do this for accessibility reasons, as screen readers can recognize the nav landmark. This allows our code to also be semantic and allow for better SEO, as search engines will recognize our nav tag.",
            "We then organize our code into two parts, a left side(the logo) and the right side(nav-links and CTA buttons). This allows use to use the power of flexbox to layout our code better.",
            "Our nav-links are contained in a unordered list, with each list item being a link to a different page on our website. We use the list format for both accessibility and semantics.",
            "Also in our right side container, is our group of buttons, contained in a div tag. We will get more into the CSS, but we group them to use Flexbox once again!"
        ],
        cssTips: [
            "We will first reset all default styles in our document, by selecting everything with the universal selector. With this selected, we will set the margin and padding to 0, to have fewer problems with our overall layout.",
            "We use the element selector for nav to turn our container into a flexbox container. Within the container, we align our child elements in the center and have a gap between them using space-between. We also added some padding to make it less cramped. If this confuses you, check out the resources below to refresh on Flexbox.",
            "On all of our a tags, we reset its style by applying text-decoration: none and its color to inherit",
            "We also transform our unordered list into a flex container, allowing us to have our items side by side with some gap.",
            "Now remember, we have two sides, our left side(logo) and right side(nav-links and buttons), we create a class called “right-cont” and use this to create another flex container! This flex container holds our right content, and we will add some gap on it as well. !",
            "Last but not least, our button container! We also make this a flex, add some padding and other styles to the button."
        ],
        jsTips: [
            "No JS required!"
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav" className='underline'>MDN Web Docs on the navigation element</a> </>,
            <> <a href = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className='underline'>CSS Tricks guide on Flexbox</a> </>

        ]
    }


  return (
    <CompLayout content={content} />
  )
}

export default page
