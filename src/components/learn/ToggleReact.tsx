'use client'
import React, {useState} from 'react'
import clsx from 'clsx'
import { useTutorialContext } from '@/contexts/TutorialContext'


const ToggleReact = () => {
  const { isReactMode, toggleReactMode } = useTutorialContext()

  return (
    <div className='flex items-center gap-4'>
        <div 
        onClick={toggleReactMode}
        className = {clsx(
            'flex w-20 h-10 rounded-full cursor-pointer transition-all',
            isReactMode ? "bg-brandLightBlue" : "bg-gray-700"
           
        )}>
      <span className={clsx(
        'h-10 w-10 bg-white border transition-all rounded-full',
        isReactMode && 'ml-10'
      )} />
        </div>
        <p className='font-semibold'>
            {!isReactMode ? "Toggle for React!" : "Toggle for Vanilla! "}
            </p>
    </div>
    
  )
}

export default ToggleReact
