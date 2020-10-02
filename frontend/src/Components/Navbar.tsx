import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { setAccesToken } from '../accessToken'
import { useCurrentUserQuery, useLogoutMutation } from '../generated/graphql'
import styled from 'styled-components'

export const Navbar: React.FC = () => {
  const { data, loading } = useCurrentUserQuery()
  // const [ logout, { client } ] = useLogoutMutation()

    let userisExist: any = null
    if (loading) userisExist = null
    if (data && data.currentUser) {
      userisExist = (
        <>
          <NavLi>
            <NavStyledLink to='/Products'>Products</NavStyledLink>
          </NavLi>
          <NavLi>
            {/* <NavStyledLink to={'/user:' + data.currentUser.id}>Settings  id:{data.currentUser.id}</NavStyledLink> */}
            <NavStyledLink to={`/settingsForUserId/${data.currentUser.id}`}>Settings your id:{data.currentUser.id}</NavStyledLink>
          </NavLi>
        </>
      )
    } else {
      userisExist = (
        <>
          <NavLi>
            <NavStyledLink to='/signIn'>Sign In</NavStyledLink>
          </NavLi>
          <NavLi>
            <NavStyledLink to='/signUp'>Sign Up</NavStyledLink>
          </NavLi>
        </>
      )
    }

  return (
    <>
      <Header>
        <Nav>

          <LogoDiv>
            <LogoTitle>Logo</LogoTitle>
          </LogoDiv>

          <NavList>
            <NavLi>
              <NavStyledLink to='/' exact >Home</NavStyledLink>
            </NavLi>
            {userisExist}
            {/* <button onClick={async () => {
              await logout()
              setAccesToken('')
              await client.resetStore()
              }}>logout</button> */}
          </NavList>

        </Nav>
      </Header>
    </>
  )
}

const Header = styled.header`
  background: linear-gradient(90deg, rgba(245,146,70,1) 0%, rgba(34,167,94,1) 0%, rgba(30,77,66,1) 100%);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  color: #edf1f7;
  max-height: 10vh;
  height: 8vh;
`

const LogoDiv = styled.div`
  flex: 1;
`

const LogoTitle = styled.h1`
  font-size: 1.8rem;
  letter-spacing: .2rem;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`

const NavLi = styled.ul`

`

const NavStyledLink = styled(NavLink)`
  color: #edf1f7;
  padding: .5rem 1rem;
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  transition: background .3s ease-in;
  position: relative;

  &:hover {
    background: #04472d;
  }
  &.active::before {
    content: "";
    width: 100%;
    height: 5px;
    bottom: -43%;
    left: 0%;
    background: #04472d;
    position: absolute;
  }
`;
