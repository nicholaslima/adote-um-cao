import { ReactNode, createContext, useContext, useState } from 'react'

export interface PetType {
  id: string
  name: string
  description: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: 'low' | 'medium' | 'high'
  independence: boolean
  size: 'small' | 'medium' | 'big'
  type: 'dog' | 'cat'
  photo: string
  photo_url: string
  orgId: string
}

interface ContextType {
  pets: PetType[]
  insertPets(pets: PetType[]): void
}

interface PetsProviderProps {
  children: ReactNode
}
const PetsContext = createContext<ContextType>({} as ContextType)

export function PetsProvider({ children }: PetsProviderProps) {
  const [pets, setPets] = useState<PetType[]>([])

  function insertPets(pets: PetType[]) {
    setPets(pets)
  }

  return (
    <PetsContext.Provider value={{ pets, insertPets }}>
      {children}
    </PetsContext.Provider>
  )
}

export function useContextPets() {
  const Context = useContext(PetsContext)

  return Context
}
