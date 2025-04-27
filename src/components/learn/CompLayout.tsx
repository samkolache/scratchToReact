import React from 'react'
import { useTutorialContext } from '@/contexts/TutorialContext'


import ToggleReact from './ToggleReact'

import TutorialHeader from './tutorial/TutorialHeader'
import LearningPoints from './tutorial/LearningPoints'
import Preqs from './tutorial/Prereqs'
import CodePreview from './tutorial/CodePreview'
import ExplanationSection from './tutorial/ExplSection'
import ResourceLinks from './tutorial/ResourcesLink'

import clsx from 'clsx'

const CompLayout = ({ content, reactStatus }) => {

    const { isReactMode } = useTutorialContext()

    return (
        <div className='ml-16'>
            <div className='max-w-4xl space-y-4'>
                <TutorialHeader title={content.title} />
                <LearningPoints points={content.learnPoints} />
                <Preqs items={content.prereqs} />
                {reactStatus ? (
                    <ToggleReact />
                ) : (
                    <h2 className='text-3xl font-semibold'><span className='text-brandLightBlue'>React verison</span> coming soon!</h2>
                )}
                <hr />
            </div>

            <CodePreview
                html={isReactMode ? undefined : content.html}
                css={isReactMode ? undefined : content.css}
                js={isReactMode ? undefined : content.js}
                react={isReactMode ? content.react : undefined}
            />
            <div className="mt-12 mb-12 space-y-6">
                <h2 className='text-3xl font-bold'>Explanation</h2>
                <ExplanationSection
                    title={isReactMode ? "REACT" : "HTML"}
                    tips={content.htmlTips}
                    isReact={isReactMode}
                    type="html"
                />
                <ExplanationSection
                    title={isReactMode ? "TAILWIND" : "CSS"}
                    tips={content.cssTips}
                    isReact={isReactMode}
                    type="css"
                />
                {!isReactMode && content.jsTips && (
                    <ExplanationSection
                        title="JAVASCRIPT"
                        tips={content.jsTips}
                        type="js"
                    />
                )}

                <ResourceLinks resources={content.resources} />
            </div>
        </div>
    )
}

export default CompLayout
