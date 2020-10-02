import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useSignUpMutation } from '../generated/graphql'
import { FaArrowRight } from 'react-icons/fa';
import { SignSection, SignContainer, ImageContainer, ImageTitle, FormContainer, FormTitle, Form, Wrapper, PersonIcon, Input, PasswordIcon, EyePassword, SubmitButtone } from '../style/globalStyle'

export const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [signUp] = useSignUpMutation()
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = (): void => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const registered = await signUp({ variables: { email, password } })

    if (registered.data?.sighUp) {
      history.push('/signIn')
    }

    console.log(registered)
    setEmail('')
    setPassword('')
  }

  return (
    <SignSection>
      <SignContainer>

      <ImageContainer>
          <ImageTitle>Hello</ImageTitle>
      </ImageContainer>

      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
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
