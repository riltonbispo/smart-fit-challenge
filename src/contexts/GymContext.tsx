'use client'

import { GymActions, gymReducer } from '@/reducers/gymsReducer'
import { GymType } from '@/types/gymType'
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react'

type GymContextType = {
  gyms: GymType[]
  dispatch: Dispatch<GymActions>
}

export const GymContext = createContext<GymContextType | null>(null)

export const ProviderGymContext = ({ children }: { children: ReactNode }) => {
  const [gyms, dispatch] = useReducer(gymReducer, [])

  return (
    <GymContext.Provider value={{ gyms, dispatch }}>
      {children}
    </GymContext.Provider>
  )
}

export const useGyms = () => useContext(GymContext)
