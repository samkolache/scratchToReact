'use client'
import React, { createContext, useState, useContext } from 'react'

type TutorialContextType = {
  isReactMode: boolean
  toggleReactMode: () => void
  setReactMode: (value: boolean) => void
}

const TutorialContext = createContext<TutorialContextType | undefined>(undefined)

export const TutorialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReactMode, setIsReactMode] = useState(false)

  const toggleReactMode = () => setIsReactMode(prev => !prev)
  const setReactMode = (value: boolean) => setIsReactMode(value)

  return (
    <TutorialContext.Provider value={{ isReactMode, toggleReactMode, setReactMode }}>
      {children}
    </TutorialContext.Provider>
  )
}

export const useTutorialContext = () => {
  const context = useContext(TutorialContext)
  if (context === undefined) {
    throw new Error('useTutorialContext must be used within a TutorialProvider')
  }
  return context
}