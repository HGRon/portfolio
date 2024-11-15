'use client'

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react'

type AnimationState = 'play' | 'back'

interface AnimationContextProps {
  animation: AnimationState
  triggerAnimation: (state: AnimationState) => void
}

const AnimationContext = createContext<AnimationContextProps | undefined>(
  undefined,
)

export const useAnimationContext = (): AnimationContextProps => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error(
      'useAnimationContext must be used within an AnimationProvider',
    )
  }
  return context
}

interface AnimationProviderProps {
  children: ReactNode
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
}) => {
  const [animation, setAnimation] = useState<AnimationState>('play')

  // Função para mudar o estado da animação
  const triggerAnimation = useCallback((state: AnimationState) => {
    setAnimation(state)
  }, [])

  return (
    <AnimationContext.Provider value={{ animation, triggerAnimation }}>
      {children}
    </AnimationContext.Provider>
  )
}
