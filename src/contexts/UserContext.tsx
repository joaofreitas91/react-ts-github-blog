import { createContext } from 'react'
import { useGithubUser } from '../services/hooks/useGithubUser'

interface User {
  name: string
  login: string
  avatar_url: string
  bio: string
  company: string
  blog: string
  followers: number
}

interface UserContextData {
  user: User | undefined
  isLoading: boolean
}

export const UserContext = createContext({} as UserContextData)

interface UserProviderProps {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const { data: user, isLoading } = useGithubUser()

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
