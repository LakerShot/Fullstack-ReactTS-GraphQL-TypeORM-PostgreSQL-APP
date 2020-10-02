import React from 'react'
import { Link } from 'react-router-dom'
import { useUsersQuery } from '../generated/graphql'

export const Home: React.FC = () => {
  const {data} = useUsersQuery({fetchPolicy: 'network-only'})

  if (!data) return <div>loading...</div>

  return (
    <>
      <div>users: </div>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.email}, {user.id}</li>
        ))}
      </ul>
    </>
  )
}
