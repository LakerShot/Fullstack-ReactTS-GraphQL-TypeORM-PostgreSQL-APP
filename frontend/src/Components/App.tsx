import React, { useEffect, useState } from 'react'
import { setAccesToken } from '../accessToken'
import { Routes } from '../Routes'
import '../style/reset.css'

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function refreshToken(){
      const response = await fetch('http://localhost:1000/rfsh_token', {
        method: 'POST',
        credentials: 'include'
      })
      const { accessToken } = await response.json()
      setAccesToken(accessToken)
      setLoading(false)
    }

    refreshToken()
  }, [])

  if (loading) return <div>loading...</div>

  return (
    <Routes />
  )
}
