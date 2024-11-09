import React from 'react'
import CompLayout from '@/app/components/learn/CompLayout';
import CodePreviewLayout from '@/app/components/learn/CodePreviewLayout';


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
       
        <div class = "slideshow-cont">
        
        <div class = "slide">
            <p class = "slide-number">1/3</p>
            <img src = "https://picsum.photos/id/1/600/300" class = "slide-img">
            <p class = "caption-text">Caption text here</p>
        </div>
        
        <div class = "slide">
            <p class = "slide-number">2/3</p>
            <img src = "https://picsum.photos/id/3/600/300" class = "slide-img">
            <p class = "caption-text">Caption text here</p>
        </div>
        
        <div class = "slide">
            <p class = "slide-number">3/3</p>
            <img src = "https://picsum.photos/id/2/600/300" class = "slide-img">
            <p class = "caption-text">Caption text here</p>
        </div>
        
        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a class="next" onclick="changeSlide(1)">&#10095;</a>
        
        <div class="dots-container">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>
    <script src="script.js"></script>
    </body>
    </html>`;
    
    const cssCode = `
    * {
  margin: 0;
  padding: 0;
  border-sizing: border-box
}

.slideshow-cont {
  position: relative; 
  max-width: 600px;
  margin: auto;
}

.slide {
  display: none;
  position: relative;
}


.slide-number {
  position: absolute;
  color: white;
  top: 10px;
  left: 15px;
  font-size: 18px;
  background-color: rgba(0,0,0,0.5);
  padding: 5px;
  border-radius: 5px;
}

.caption-text {
  position: absolute;
    bottom: 10px;
    left: 15px;
    color: white;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 3px;
}

.prev, .next {
     position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dots-container {
    text-align: center;
    margin-top: 10px;
}

.dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 5px;
    background-color: #bbb;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
}

.active, .dot:hover {
    background-color: #717171;
}
`

  const jsCode = `
let slideIndex = 1; //start with first slide
showSlides(slideIndex); //puts first slide

// Function to change the current slide
function changeSlide(n) { 
    showSlides(slideIndex += n);
}

// Function to set the current slide when a dot is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to show slides
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) { //if we click to 4/3 goes to 1/1
        slideIndex = 1;
    }
    if (n < 1) { //if we click 0/0 goes to 3/3
        slideIndex = slides.length;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove the active class from all dots
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    // Display the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
`





    const content = {
        title: "Creating a Image Carousel with HTML, CSS, and Javascript",
        learnPoints: [
        'How positioning works in CSS',
        'DOM Manipulation',
        'How to use an index to keep track of what to show'   
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript"
        ],
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} js = {jsCode} /> </>,
        htmlTips: [
            "Let's get started! We will create some containers, one container to hold all of our slides and three containers for each slide. Within each slide container, we will have the slide number, the image, and some caption text.",
            "At the bottom of our 'slideshow-cont' we will add two link tags to represent our arrows(using HTML symbol entities) and another container to hold three dots to represent which slide we are on as well."
        ],
        cssTips: [
            "As usual, let's reset our global padding, margin, and set our border-sizing to border-box. With our overall container, we will set its position to relative so we can position things within the container. Let's set a max-width of 600px to keep everything a good size",
            "Our slide container will have a display of none(you can add this at the end), and a position of relative as well. Our .slide number will have a position of absolute and be positoned in the top left. We will add a nice background color with some padding to make it readbale no matter the image color. We will do the same thing for our caption text, but we will position it in the bottom left instead.",
            "On to our arrows, we will style both to be in the middle using a combination of top: 50% and the transform property(this is a common pattern to center something vertically. Add some styling to make it look better. Then, individually, position them to their corresponding left and right sides",
            "Finally. lets center our dot-container with the rest of our content. We can create each dot by setting and an equal height and width of 12px, then giving a border radius of 50%. We will also create an active class which will be placed on the active dot for the corresponding slide."

        ],
        jsTips: [
            "Let's dive into some new JS concepts! We start by creating a variable slideIndex, initialized at 1, to track the current slide. We call our main function, showSlides, with slideIndex as the argument to display the first slide.",
            "Next, we have changeSlide, a function that takes n (either 1 or -1) to move between slides. This function adjusts slideIndex by adding or subtracting n, and it will be attached to our arrow buttons as an onClick function in the HTML. The left arrow passes -1, and the right passes 1.",
            "The currentSlide function sets slideIndex to a specific slide number (1, 2, or 3), allowing us to use it with the navigation dots. These dots will trigger this function via onClick, updating the slideIndex",
            "Now, our main function, showSlides. We first select all slides and dots and store them in their respective variables. We handle out-of-bounds indices by checking if slideIndex is greater than the number of slides, resetting it to 1, or if slideIndex is less than 1, setting it to the last slide.",
            "We hide all slides and remove the active class from each dot. Finally, we display the correct slide using slideIndex and mark the corresponding dot as active. Since arrays are zero-based, we subtract 1 from slideIndex to show the correct slide."
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" className='underline'>How arrays work in JS</a> </>,
            <> <a href = "https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp" className='underline'>W3 Schools on how to create a image carousel</a> </>,


        ]
    }


  return (
    <CompLayout content={content} />
  )
}

export default page
