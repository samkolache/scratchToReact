import React from 'react'

const CompLayout = ({content}) => {
  return (
    <div className='ml-16'>
        <div className='max-w-3xl space-y-4'>
        <h1 className='text-5xl font-bold'>{content.title}</h1>
        <div>
            <h2 className='text-3xl font-semibold'>What you'll learn</h2>
            <ul className='list-disc pl-6 pt-2'>
                {content.learnPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className='text-3xl font-semibold'>Prerequisites</h2>
            <ul className='list-disc pl-6 pt-2'>
                {content.prereqs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr />
        </div>
        <div className='mt-12'>
            <h2 className='text-3xl font-bold mb-4'>The Code</h2>
            <content.codeComponent />
        </div>
        <div className="mt-12 mb-12 space-y-6">
            <h2 className='text-3xl font-bold'>Explanation</h2>
            {/* HTML */}
            <div>
                <h3 className='text-2xl font-semibold text-brandOrange'>HTML</h3>
                <ul className='list-disc pl-6 max-w-4xl'>
                    {content.htmlTips?.map((tip, index) => (
                        <li className="mt-2" key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
            {/* CSS */}
            <div>
                <h3 className='text-2xl font-semibold text-brandBlue'>CSS</h3>
                <ul className='list-disc pl-6 max-w-4xl'>
                {content.cssTips?.map((tip, index) => (
                        <li className="mt-2" key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-semibold text-brandYellow'>Javascript</h3>
                <ul className='list-disc pl-6 max-w-4xl'>
                {content.jsTips?.map((tip, index) => (
                        <li className="mt-2" key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-semibold' >Resources</h3>
                <ul className='list-disc pl-6 max-w-4xl'>
                {content.resources?.map((resc, index) => (
                        <li className="mt-2" key={index}>{resc}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CompLayout
