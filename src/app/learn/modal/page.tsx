import React from 'react'
import Link from 'next/link'
import RawModal from '@/app/components/codePreviews/RawModal'
import CompLayout from '@/app/components/learn/CompLayout'

const page = () => {

    const content = {
        title: "Creating a Modal using HTML, CSS, and Javascript",
        learnPoints: [
            'DOM Manipulation and Event Handling',
            'Flexbox',
            'CSS Positioning',
            'How to create an overlay'
        ],
        prereqs: [
            "Basic HTML, CSS, and Javascript",
            <>Completed the <Link href='/learn/card' className='underline'>Card</Link> tutorial</>
        ],
        codeComponent: RawModal,
        htmlTips: [
            "First let's create a button to open our modal. Then, we'll create a modal container with a simple heading, a supporting tag, a button, and a close button. You can create a close button in HTML with &times in a <span>.",
            "Notice the lonely div at the bottom with the class overlay. We will create a light overlay to make the modal really stand out when opened."
        ],
        cssTips: [
            "Our modal will have some basic styling, but notice we position the modal in the center. We used a position value of fixed, with top:50% and left:50%, and transform, to center the modal on the page. This is a common way to center something on the page. Our modal will also have a high z-index, making sure it sits on top of all content, including our overlay.",
            "We do the same for our open button.",
            "Our overlay is styled to fill the whole screen with the position and its corresponding values. Its z-index is also high but not higher than our modal, so it covers everything but our mdoal", 
            "Finally, we have two classes to hide both our overlay and our modal"  
        ],
        jsTips: [
            "For our JS, we get the following elements and store them into JS variables: our open button, modal, modal close button, and our overlay.",
            "We add a basic event listener of click for our open button, removing the hidden classes from both the overlay and modal.",
            "If the x button is clicked, we do the opposite and add these classes back, that's it!"
        ],
        resources: [
            <> <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS/position" className='underline'>MDN Web Docs on position</a> </>,
            <> <a href = "https://www.w3schools.com/howto/howto_css_overlay.asp" className='underline'>W3 Schools tutorial on an overlay effect</a> </>,

        ]
    }

  return (
    <div>
    <CompLayout content={content} />
    </div>
  )
}

export default page
