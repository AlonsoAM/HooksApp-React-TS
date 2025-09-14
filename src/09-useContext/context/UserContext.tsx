import {createContext, type PropsWithChildren, useEffect, useState} from "react";
import {type User, users} from "@/09-useContext/data/user-mock.data.ts";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface UserContextProps {
  // state
  authStatus: AuthStatus
  user: User | null
  isAuthenticated: boolean
  // methods
  login: (userId: number) => boolean
  logout: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext =
  createContext<UserContextProps>({} as UserContextProps)

// HOC - Higher Order Component
export const UserContextProvider =
  ({children}: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)

    const handleLogin = (userId: number) => {
      const user = users.find(user => user.id === userId)

      if (!user){
        console.log(`User not found ${userId}`)
        setAuthStatus('not-authenticated')
        setUser(null)
        return false
      }

      setUser(user)
      setAuthStatus('authenticated')
      localStorage.setItem('userId', userId.toString())
      return true
    }

    const handleLogout = () => {
      console.log('Logout')
      setAuthStatus('not-authenticated')
      setUser(null)
      localStorage.removeItem('userId')
    }


    useEffect(() => {
      const storedUserId = localStorage.getItem('userId')

      if (storedUserId) {
        const userId = +storedUserId
        handleLogin(userId)
        return
      }

      handleLogout()
    }, []);


    return (
      <UserContext
        value={{
          authStatus: authStatus,
          isAuthenticated: authStatus === 'authenticated',
          user: user,
          login: handleLogin,
          logout: handleLogout
        }}
      >
        {children}
      </UserContext>
    )
  }
