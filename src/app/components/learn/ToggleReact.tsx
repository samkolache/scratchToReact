'use client'
import React, {useState} from 'react'
import clsx from 'clsx'

const ToggleReact = ({isReact, setIsReact}) => {

    

  return (
    <div className='flex items-center gap-4'>

        {/* Toggle Switch */}
        <div 
        onClick={() => setIsReact(curr => !curr)}
        className = {clsx(
            'flex w-20 h-10 rounded-full cursor-pointer transition-all',
            isReact ? "bg-brandLightBlue" : "bg-gray-700"
           
        )}>
      <span className={clsx(
        'h-10 w-10 bg-white border transition-all rounded-full',
        isReact && 'ml-10'
      )} />
        </div>
        <p className='font-semibold'>
            {!isReact ? "Toggle for React!" : "Toggle for Vanilla! "}
            </p>
    </div>
    
  )
}

export default ToggleReact
