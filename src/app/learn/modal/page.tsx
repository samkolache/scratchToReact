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
      <button class="open-btn">Click me to open modal</button>
    
        <!-- modal container -->
        <div class="modal hide">
            <div>
                <p class="title">Title of modal goes here</p>
                <p class="text">Supporting text right here</p>
            </div>
            <button>Click me please!</button>
            <span class="close-btn">&times</span>
        </div>
    
        <div class="overlay hide"></div>
    <script src="script.js"></script>
    </body>
    </html>`;
    
    const cssCode = `* {
        margin: 0;
        padding: 0;
    }
    
    button {
        padding: 8px 16px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
    
    .modal {
        display: flex;
        position: fixed;
        background-color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
        border-radius: 10px;
        max-width: 300px;
        min-height: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
    }
    
    .open-btn {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .title {
        font-size: 24px;
        font-weight: bold;
    }
    
    .text {
        color: #949494;
    }
    
    .modal.hide {
        display: none;
    }
    .close-btn {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999; /* Ensures overlay is on top */
        backdrop-filter: blur(5px); /* Optional: adds a subtle blur for a frosted-glass effect */
    }
    
    .overlay.hide {
        display: none;
    }`
    
    
    const jsCode = `const openModalBtn = document.querySelector(".open-btn");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");
    
    openModalBtn.addEventListener("click", (e) => {
        modal.classList.remove('hide');
        overlay.classList.remove('hide');
    })
    
    modalCloseBtn.addEventListener("click", (e) => {
        modal.classList.add('hide');
        overlay.classList.add('hide');
    })`

    const content = {
        title: "Creating a Modal using HTML, CSS, and Javascript",
        learnPoints: [
            'DOM Manipulation and Event Handling',
            'Flexbox',
            'CSS Positioning',
            'How to create an overlay'
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript",
            <>Completed the <Link href='/learn/card' className='underline'>Card</Link> tutorial</>
        ],
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} js = {jsCode} /></>,
        htmlTips: [
            "First let's create a button to open our modal. Then, we'll create a modal container with a simple heading, a supporting tag, a button, and a close button. You can create a close button in HTML with &times in a <span>.",
            "Notice the lonely div at the bottom with the class overlay. We will create a light overlay to make the modal really stand out when opened."
        ],
        cssTips: [
            "Our modal will have some basic styling, but notice we position the modal in the center. We used a position value of fixed, with top:50% and left:50%, and transform, to center the modal on the page. This is a common way to center something on the page. Our modal will also have a high z-index, making sure it sits on top of all content, including our overlay.",
            "We do the same for our open button.",
            "Our overlay is styled to fill the whole screen with the position and its corresponding values. Its z-index is also high but not higher than our modal, so it covers everything but our mdoal", 
            "Finally, we have two classes to hide both our overlay and our modal"  
        ],
        jsTips: [
            "For our JS, we get the following elements and store them into JS variables: our open button, modal, modal close button, and our overlay.",
            "We add a basic event listener of click for our open button, removing the hidden classes from both the overlay and modal.",
            "If the x button is clicked, we do the opposite and add these classes back, that's it!"
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS/position" className='underline'>MDN Web Docs on position</a> </>,
            <> <a href = "https://www.w3schools.com/howto/howto_css_overlay.asp" className='underline'>W3 Schools tutorial on an overlay effect</a> </>,

        ]
    }

  return (
    <div>
    <CompLayout content={content} />
    </div>
  )
}

export default page
