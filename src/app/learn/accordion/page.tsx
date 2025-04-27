import React from 'react'
import CodePreviewLayout from '@/components/learn/CodePreviewLayout'
import CompLayout from '@/components/learn/CompLayout'

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
       <div class="container">
            <div class="accordion">
                <div class="toggle-cont">
                    <p>Why is the sky blue?</p>
                    <span class="arrow">&#x25BC;</span>
                </div>
                
                <p class="content hide">The sky appears blue due to sunlight scattering by atmospheric molecules, 
                favoring shorter blue wavelengths.</p>
            </div>
            <div class="accordion">
                <div class="toggle-cont">
                    <p>How hot is the earths core on a tuesday?</p>
                    <span class="arrow">&#x25BC;</span>
                </div>
                
                <p class="content hide">The Earth's core temperature remains consistent regardless of the day of the week, 
                estimated between 9,000°F and 11,000°F 
                    (about 5,000°C to 6,000°C). This intense heat is due to residual energy from Earth's formation, radioactive decay, 
                    and pressure 
                    at the core's center.</p>
            </div>
            <div class="accordion">
                <div class="toggle-cont"> 
                    <p>What animal flies the fastest?</p>
                    <span class="arrow">&#x25BC;</span>
                </div>
                <p class="content hide">The peregrine falcon is the fastest animal in flight, reaching speeds over 
                240 mph (386 km/h) during its hunting dive, 
                    known as a "stoop."
                </p>
            </div>
        </div>
    <script src="script.js"></script>
    </body>
    </html>`;
    
    const cssCode = `* {
        margin: 0;
        padding: 0;
    }
    
    .container {
        margin-left: 100px;
        margin-top: 100px;
    }
    
    .accordion {
        background-color: #1a73e8;
        max-width: 400px;
    }
    
    .content {
        background-color: #e8f0fe;
        padding: 10px;
        color: #202124;
    }
    
    .content.hide {
        display: none;
    }
    
    
    .toggle-cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        color: white;
    }
    
    .arrow {
        font-size: 10px;
        cursor: pointer;
    }
    
    .arrow.rotate {
        transform: rotate(180deg);
    }
    `
    
    
    const jsCode = `document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            const content = arrow.closest('.toggle-cont').nextElementSibling;
    
            // Prevent the event from bubbling up to parent elements
            event.stopPropagation();
    
            // Toggle the 'hide' class for content
            content.classList.toggle('hide');
            
            // Rotate the arrow
            arrow.classList.toggle('rotate');
        });
    });`
    
    
    
    const content = {
        title: "Creating an Accordion using HTML, CSS, and Javascript",
        learnPoints: [
            'DOM Manipulation and Event Handling',
            'Flexbox'
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript",
        ],
        codeComponent: <CodePreviewLayout html={htmlCode} css={cssCode} js={jsCode} />,
        htmlTips: [
            "We first create an overall container to hold our three accordion items. Within each accordion, we have a flex container to create the question with the toggle at the end. Then the paragraph that contains the answer, will be hidden by default"
        ],
        cssTips: [
            "We give our container some margin to center more closely on the page.",
            "We style our accordion container, while also styling our toggle-cont container to be a flex container to separate the title and the dropdown icon",
            "We hide our answer by default with hide and add a class to rotate the arrow when opened." 
        ],
        jsTips: [
            "Our JS is very simple, we will select all of our arrow icons  with querySelectorAll. We then use the forEach method to cycle through and add an event listener 'click' to each arrow.",
            "Within our event listener, we will create a variable to hold the content we want to open, which is our paragraph with class content. 'arrow.closest('.toggle-cont')' will find the nearest ancestor that has the matching class. Once found, '.nextElementSibling', will locate the next sibling, which is always the content we want to show!",
            "We will then use this content variable to toggle the container when we click the arrow. We will also rotate the arrow onClick as well!"
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" className='underline'>MDN Web Docs on the DOM</a> </>,
            <> <a href = "https://www.w3schools.com/howto/howto_js_accordion.asp" className='underline'>W3 School on how to create an accordion</a> </>,

        ]
    }

  return (
    <div>
    <CompLayout content={content} />
    </div>
  )
}

export default page
