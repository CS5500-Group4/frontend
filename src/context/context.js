import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'

const RMCContext = React.createContext()
const RMCProvider = ({ children }) => {
  const [example, setExample] = useState('example')

  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = async (data) => {
    console.log(data)
    setUser(data)
    navigate('/dashboard', { replace: true })
  }

  const logout = () => {
    setUser(null)
    navigate('/', { replace: true })
  }



  return <RMCContext.Provider value={{ example, setExample,user, login, logout }}>{children}</RMCContext.Provider>
}

export { RMCProvider, RMCContext }
