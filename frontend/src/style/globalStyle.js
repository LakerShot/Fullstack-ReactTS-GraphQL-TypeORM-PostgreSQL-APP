import styled from 'styled-components'

import bgImage from '../assets/bgImage.jpg'
import hello from '../assets/hello.jpg'

import { FaUserEdit, FaProductHunt, FaEyeSlash } from 'react-icons/fa';

// export const Container = styled.section`
//   width: 100%;
//   background: ${props => props.green ? "linear-gradient(90deg, rgba(245,146,70,1) 0%, rgba(30,77,66,1) 0%, rgba(4,78,43,1) 100%);" : "white"};
//   color: ${props => props.green ? "white" : "#121c18"};
// `

export const SignSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 8vh);
  background-color: rgba(0,0,0,.85);
  background-image: url(${bgImage});
  background-blend-mode: multiply;
  background-size: cover;
  background-position: top center;
`

export const SignContainer = styled.div`
  width: 450px;
  max-width: 90%;
  background: rgba(252, 248, 247);
  border-radius: 4px;
  box-shadow: 20px 20px 37px 0px rgba(0,0,0,0.81);

`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background-color: rgba(0, 138, 90, .4);
  background-image: url(${hello});
  background-blend-mode: screen;
  background-size: cover;
  background-position: top right;
  margin-bottom: 1.5rem;
`
export const ImageTitle = styled.h1`
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 3.5rem;
  color: white;
`

export const FormContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`

export const FormTitle = styled.h2`
  color: grey;
  margin-bottom: 1rem;
`

export const PersonIcon = styled(FaUserEdit)`
  color: rgba(0, 138, 90, 1);
  margin-right: .8rem;
  font-size: 1.3rem;
`
export const PasswordIcon = styled(FaProductHunt)`
  color: rgba(0, 138, 90, 1);
  margin-right: .8rem;
  font-size: 1.3rem;
`

export const Form = styled.form`
  width: 100%;
  padding: .5rem;
  position: relative;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-family: inherit;
  border-bottom: 2px solid #f2f2f2;
  font-size: 1.2rem;
  outline: none;
  animation: all .2s ease-in;
  &:hover::placeholder {
    color: black;
  }
  &:focus {
    border-bottom-color: rgba(0, 138, 90, 1);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const EyePassword = styled(FaEyeSlash)`
  position: absolute;
  right: 6%;
  bottom: 34%;
  cursor: pointer;
`

export const SubmitButtone = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 138, 90, 1);
  border-radius: 50%;
  outline: none;
  border: none;
  position: absolute;
  color: white;
  right: -30%;
  top: -20%;
  cursor: pointer;
  box-shadow: 20px 20px 37px 0px rgba(0,0,0,0.81);
  transition: background .2s ease-in-out;
  &:hover {
    background: rgba(18, 224, 142);
  }

`