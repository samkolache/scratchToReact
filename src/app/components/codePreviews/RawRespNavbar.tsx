import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react"

const RawRespNavbar = () => {
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

export default RawRespNavbar;
