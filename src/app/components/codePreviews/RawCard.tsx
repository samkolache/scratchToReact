import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react"

const RawCard = () => {
    const htmlCode = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Site</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
     <div class="card-cont">
        <!-- Image-->
        <img src="https://picsum.photos/300/200" />

        <!-- Information container -->
        <div class="info-cont">
            <!-- Intro Container -->
            <div>
                <p class="title">Title goes here</p>
                <p class="text">Secondary Text</p>
            </div>
            <p class="text">Here is some supporting text, I am talking a lot about supporting different things!</p>
            <button>Click me!</button>
        </div>
    </div>
  </body>
  </html>`;
  
  const cssCode = `
  * {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    padding: 8px 16px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.card-cont {
    /* background-color: blue; */
    max-width: 24rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
}

.info-cont {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 15px;
    padding-bottom: 15px;
    padding-top: 10px;
    gap: 10px;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.text {
    color: #949494;
}`
    
    
    
    
      return (
      <div>
        <Sandpack 
        template="static"
        files={{
          "/index.html": {code:htmlCode},
          "/style.css": {code:cssCode}
        }}
      />
      </div>
    )
  }
  
  export default RawCard
