import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Sandpack } from "@codesandbox/sandpack-react"


const RawNavDrop = () => {

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
    <ul class = "nav-links">
      <li><a href = "/home">Home</a></li>
      <li><a href = "/about">About</a></li>
      <li>
        <div class = "nav-dropdown">
           <a href = "/blog">Blog</a>
          <svg id = "chevron" xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width = "15px" height = "15px">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
    </li>
    </ul>
    <div class = "button-cont">
      <button class = "sign-in-btn">Sign in</button>
      <button>Sign up</button>
    </div>
  </div>
  <div class="dropdown close">
      <ul class = "drop-links">
        <li><a href = "/item-1">Item #1</a></li>
        <li><a href = "/item-2">Item #2</a></li>
        <li><a href = "/item-3">Item #3</a></li>
       </ul>
  </div>
</nav>
<script src="script.js"></script>
</body>
</html>`;

const cssCode = `* {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px
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
  right: 205px;
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
 let dropdownState = false; //Hidden class on

blogItem.addEventListener("click", (e) => {
  if(!dropdownState) {
    dropdown.classList.remove('close')
    chevron.classList.add("rotate");
    dropdownState = true
  }else {
    dropdown.classList.add('close')
    chevron.classList.remove("rotate");
    dropdownState = false
  }
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

export default RawNavDrop
