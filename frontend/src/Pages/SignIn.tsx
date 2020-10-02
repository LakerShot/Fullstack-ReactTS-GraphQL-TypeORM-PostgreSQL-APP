
import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { setAccesToken } from '../accessToken'
import { CurrentUserDocument, CurrentUserQuery, useSignInMutation } from '../generated/graphql'
import { FaArrowRight } from 'react-icons/fa';
import { SignSection, SignContainer, ImageContainer, ImageTitle, FormContainer, FormTitle, Form, Wrapper, PersonIcon, Input, PasswordIcon, EyePassword, SubmitButtone } from '../style/globalStyle'

export const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [signIn] = useSignInMutation()
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const respone = await signIn({ variables:
      { email, password },

      // update the store cuz user could not be signin in the sistem
      // and i have to update store in order to reload the page to 
      // display the current user in the sistem
      // now i can use CurrentUserQuery anawhere in the app to display the user

      update: (store, {data}) => {
        if (!data) return null

        store.writeQuery<CurrentUserQuery>({
          query: CurrentUserDocument,
          data: {
            __typename: 'Query',
            currentUser: data.signIn.user
          }
        })
      }
    })

    setEmail('')
    setPassword('')

    if (respone && respone.data) {
      setAccesToken(respone.data.signIn.accessToken)
      history.push('/Products')
    }
  }

  return (
    <SignSection>
      <SignContainer>

      <ImageContainer>
          <ImageTitle>Hello</ImageTitle>
      </ImageContainer>

      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <PersonIcon />
            <Input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <PasswordIcon />
            <Input
              type={passwordShown ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyePassword onClick={togglePasswordVisiblity}/>
          </Wrapper>
          <SubmitButtone type="submit">
            <FaArrowRight />
          </SubmitButtone>
        </Form>
      </FormContainer>

      </SignContainer>
    </SignSection>
  )
}
