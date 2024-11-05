import React from 'react'
import RawNav from '@/app/components/codePreviews/RawNav';
import CompLayout from '@/app/components/learn/CompLayout';


const page = () => {
    const content = {
        title: "Creating a Navigation Bar with HTML and CSS",
        learnPoints: [
            'Proper HTML semantics for creating a NavBar',
        'How to use flexbox to create the basic layout'
        ],
        prereqs: [
            "Basic HTML and CSS"
        ],
        codeComponent: RawNav,
        htmlTips: [
            "We first wrap our navbar in a nav container, we do this for accessibility reasons, as screen readers can recognize the nav landmark. This allows our code to also be semantic and allow for better SEO, as search engines will recognize our nav tag.",
            "We then organize our code into two parts, a left side(the logo) and the right side(nav-links and CTA buttons). This allows use to use the power of flexbox to layout our code better.",
            "Our nav-links are contained in a unordered list, with each list item being a link to a different page on our website. We use the list format for both accessibility and semantics.",
            "Also in our right side container, is our group of buttons, contained in a div tag. We will get more into in the CSS, but we group them to use flexbox once again!"
        ],
        cssTips: [
            "We use the element selector for nav to turn our container into a flexbox container. Within the container, we align our child elements in the center, and to have a gap between them using space-between. We also add some padding to make it less cramped. If this confuses you, check out this link to refresh on flexbox.",
            "We use all:unset to remove all styling from our links.",
            "We also transform our unordered list into a flex container, allowing use to have our items side by side with some gap",
            "Now remember, we have two sides, our left side(logo) and right side(nav-links and buttons), we create a class called “right-cont” and use this to create another flex container! This flex container holds our right content, and we will add some gap on it as well. !",
            "Last but not least, our button container! We also make this a flex, add some padding and other styles to the button."
        ]
    }


  return (
    <CompLayout content={content} />
  )
}

export default page
