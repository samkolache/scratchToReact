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






    const content = {
        title: "Creating a basic Card Layout with HTML and CSS",
        learnPoints: [
        'How to use flexbox to create the basic layout'
        ],
        prereqs: [
            "Basic HTML and CSS"
        ],
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} /> </>,
        htmlTips: [
            "Our HTML is very simple, we create a few containers for everything in our layout. Remember, think of everything in boxes, it will help you understand why we group some things together.",
            "Our outermost div is our card container, where our card information will live. Within, we have an image and a container for all of the info on our card. This container will be a flex container with three children elements: our intro, supporting text, and our button. Let's get to styling.",
            "The image I am using is from a site called Lorem Picsum, they let you reference their URL to show an image of any dimension(which you can change in the URL)"
        ],
        cssTips: [
            "We will first reset all default styles in our document, by selecting everything with the universal selector. With this selected, we will set the margin and padding to 0, to have fewer problems with our overall layout.",
            "First, let's style our card container, we give it a max width, some border radius, and a box shadow to stand out.",
            "We need our image to span the entire width of our container, so we make its width 100%, adding some radius to make it fit in.",
            "Finally, we'll make our info container a flexbox one, giving it some spacing, alignment, ect. We also style our headings and paragraphs to make our typography a bit more readable"
        ],
        jsTips: [
            "No JS required!"
        ],
        resources: [
            <> <a href = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className='underline'>CSS Tricks guide on Flexbox</a> </>,
            <> <a href = "https://www.w3schools.com/howto/howto_css_cards.asp" className='underline'>W3 Schools on how to create a card component</a> </>,


        ]
    }


  return (
    <CompLayout content={content} />
  )
}

export default page
