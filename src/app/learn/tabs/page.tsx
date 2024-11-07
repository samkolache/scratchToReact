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
     <div class = "tab-cont">
        <button class = "selected">Houston</button>
        <button>Austin</button>
        <button>Dallas</button>
    </div>

    <div class = "tab-info" id = "houston">
        <h3>Houston</h3>
        <p>A diverse city known for space exploration and thriving</p> culture
    </div>

    <div class = "tab-info hide" id = "austin">
        <h3>Austin</h3>
        <p>A vibrant city famous for live music, tech, and culture</p>
    </div>

    <div class = "tab-info hide" id = "dallas">
        <h3>Dallas</h3>
        <p>A modern metropolis known for its culture, business, and history</p>
        
    </div>
    <script src="script.js"></script>
    </body>
    </html>`;

    const cssCode = `
   * {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

button {
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
}

button:hover {
  background-color: #dedede;
}

button.selected {
  background-color: #dedede;
}

.tab-cont {
  background-color: #f5f5f5;
  display: flex;
  gap: 20px;
  width: 500px;
  border: .5px solid
}

.tab-info {
  background-color: white;
  border: .5px solid;
  width: 500px;
  padding: 20px;
}

.tab-info.hide {
  display: none
}`

    const jsCode = `
    document.querySelectorAll('.tab-cont button').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-cont button').forEach(button => {
                button.classList.remove('selected')
    })
    
            button.classList.add('selected')
    
            const tabId = button.innerHTML.toLowerCase();
            const tabInfo = document.getElementById(tabId);
    
            document.querySelectorAll(".tab-info").forEach(tabInfo => {
            tabInfo.classList.add('hide')
            })
    
        if(tabInfo) {
        tabInfo.classList.remove('hide')
        }
  })
})
    
    `

    const content = {
        title: "Creating a Tab component with HTML, CSS, and Javascript",
        learnPoints: [
            'How to use flexbox to create the basic layout',
            'How to use padding to make your components neater',
            'DOM Manipulation',
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript"
        ],
        codeComponent: <>  <CodePreviewLayout html={htmlCode} css={cssCode} js={jsCode} /> </>,
        htmlTips: [
            "With our HTML, we will create a tab container to hold our tab buttons, and three tab info containers to hold our quick blurb about different cities in Texas.",
            "Each of our info container will have the class 'tab-info', with houston having the selected class as default. Therefore, our button will have the selected class as default as well. Each container will also have an id labled with the corresponding city, this will help us in our JS."
        ],
        cssTips: [
            "First, we will reset the margin and padding to our entire document and reset our button styles. We will also set everything to box-sizing: border-box, we will explain this in a bit.",
            "For each button, we add a hover effect and a selected class with the same color, a darker gray. With our container for our buttons, we give some padding, a border, and a width of 500px. We also make it a flex container to space things out a bit more neatly.",
            "For our tab-info containers, we add a bit of padding and a border, and also set the width to 500px. Remember when we set box-sizing to border box? We did this so our document only uses the content within a container to determine width and height. Without this property, it would use padding in this calculation as well, no extra math for us!(Try removing box-sizing: border-box and see what happens).",
            "Finally, we have a 'hide' class for our tab-info containers to use in our JS"

        ],
        jsTips: [
            "Our JS is a bit more complicated than our other modules, but we got this, let's go through it line by line!",
            "We will first cycle through all of our buttons found in the tab-cont using the forEach method. For each button, we will add an event listener and do the following when the button is clicked.",
            "Within our click listener, we will go through all the buttons again and remove any buttons with the selected class. This is to ensure nothing stays selected when we click a different tab.",
            "Next, on the button we clicked, we will add the class 'selected'. We will then create two variables to help us show the correct information. The first variable will get the innerHTML of our button and assign its value to tabID. We can then use this variable to select the correct tab-info container to display on the screen, which will be within tabInfo.",
            "Now, like we did with the buttons, we cycle through all the tab-info containers and hide all of them.",
            "Finally, if our tabInfo container contains a value, we will remove the hidden class from that container and display it on the screen.",
            "Congrats! That's a lot to take in so don't worry if you don't get the logic. Go line by line and understand what's going on."
        ],
        resources: [
            <> <a href="https://gomakethings.com/learning-how-to-think-in-javascript/" className='underline'>Learning how to think in Javascript</a> </>

        ]
    }


    return (
        <CompLayout content={content} />
    )
}

export default page
