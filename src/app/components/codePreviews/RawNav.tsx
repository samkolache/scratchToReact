import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react"

const RawNav = () => {
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

export default RawNav
