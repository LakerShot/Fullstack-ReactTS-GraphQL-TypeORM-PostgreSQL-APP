import React from 'react'
import { useCurrentUserQuery } from '../generated/graphql'

export const Settings: React.FC = () => {
  const { data, loading, error } = useCurrentUserQuery()

  if (error) return <div>error: {error}</div>
  if (loading) return <div>loading...</div>
  if (!data) return <div>no data</div>

  return (
    <div>
      <h1>Your Credentials:</h1>
      <ul>
        <li>{data.currentUser?.email}</li>
        <li>{data.currentUser?.id}</li>
      </ul>
    </div>
  )
}
