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
      <div class = "form-cont">
        <form action="submit">
            <div class = "formItem">
                <label for="fName">First Name</label>
                <input type="text" id = "fname" name = "fname" placeholder = "Enter here">
            </div>
            <div class = "formItem">
                <label for="lName">Last Name</label>
                <input type="text" id = "lname" name = "lname" placeholder = "Enter here">
            </div>
            <div class = "formItem">
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">USA</option>
                    <option value="canada">Canada</option>
                    <option value="usa">Mexico</option>
                </select>
            </div>
            <div class = "formItem">
                <label for="desc">Description</label>
                <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
            </div>
            <button>Submit!</button>
        </form>
    </div>
    <script src="script.js"></script>
    </body>
    </html>`;
    
    const cssCode = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input, select, button, textarea {
  padding: 5px;
  border: 1px solid #bebebe;
  border-radius: 10px;
  width: 100%;
}

.form-cont {
  background-color: #bebebe;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}

.formItem {
  display: flex;
  flex-direction: column;
  align-items: start;
}`
    

    const content = {
        title: "Creating a Form using HTML and CSS",
        learnPoints: [
            'Flexbox',
            'How to style a form'
        ],
        prereqs: [
            "Basic HTML and CSS",
        ],
        codeComponent: <> <CodePreviewLayout html={htmlCode} css={cssCode} /></>,
        htmlTips: [
            "Let's start out with creating an overall container to hold our form. We will then create our form using the <form> tag and start adding our elements.",
            "Each form element will be in its own container. For our text inputs, we use a label with a 'for' referencing the text inputs 'name'. We do the same for our select dropdown, but we aren't using input, but rather the <select> element. Finally, we create a text area with the same pattern as before."
        ],
        cssTips: [
            "We will always start by resetting the entire document's margin and padding.",
            "For our form, we'll make a flex container and set it to column. For each type of input(and button), we will add some basic padding, border, and border radius. We will allow them to take the full width of our container",
            "Our overall container named form-cont will have a light grey background and a display of flex, so we can position the form in the center of our screen.",
            "Each of our inputs is contained within a container with the class formItem, where we will create a flex container again with the direction of column. We will align everything to the start to prevent our items from stretching." 
        ],
        jsTips: [
            "No JS needed(yet :))"
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms" className='underline'>MDN Web Docs on styling forms</a> </>,
        ]
    }

  return (
    <div>
    <CompLayout content={content} />
    </div>
  )
}

export default page
