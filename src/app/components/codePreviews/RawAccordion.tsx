import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react"


const RawAccordion = () => {

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




  return (
    <div>
      <Sandpack 
      template="static"
      files={{
        "/index.html": {code:htmlCode},
        "/style.css": {code:cssCode},
        "/script.js": {code:jsCode}
      }}
    />
    </div>
  )
}

export default RawAccordion
