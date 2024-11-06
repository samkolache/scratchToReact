import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react"


const RawModal = () => {

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

export default RawModal
