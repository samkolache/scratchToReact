import React from 'react'
import RawAccordion from '@/app/components/codePreviews/RawAccordion'
import CompLayout from '@/app/components/learn/CompLayout'

const page = () => {

    const content = {
        title: "Creating an Accordion using HTML, CSS, and Javascript",
        learnPoints: [
            'DOM Manipulation and Event Handling',
            'Flexbox'
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript",
        ],
        codeComponent: RawAccordion,
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
