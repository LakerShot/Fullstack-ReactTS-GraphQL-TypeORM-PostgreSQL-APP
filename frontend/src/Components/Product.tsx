import React from 'react'
import styled from 'styled-components'
import { AllProductInterface } from '../interfaces/AllProductInterface'

export const Product:React.FC<AllProductInterface> = ({id, title, imgSrcUrl, about_product}) => {
  return (
    // <div>
    //   {id}
    //   {title}
    //   {imgSrcUrl}
    //   {about_product}
    // </div>

    <ProductCart>
      <ProductImageContainer>
        <ProductImage src={imgSrcUrl} alt="Product-Image"/>
      </ProductImageContainer>
      <ProductInfo >
        <ProducTitle >{title}</ProducTitle>
        <ProductAbout >{about_product}</ProductAbout>
      </ProductInfo>
    </ProductCart>
  )
}

const ProductCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left; 
`

const ProductImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 1.4rem;
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`

const ProductInfo = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  /* border-left: 5px solid rgba(0, 138, 90, 1); */
`

const ProducTitle = styled.h1`
  font-size: 1.7rem;
  font-family: inherit;
  word-break: break-all;
  margin-bottom: .5rem;
  &::first-letter {
    color: rgba(0, 138, 90, 1);
    font-size: 1.8rem;
  }
`

const ProductAbout = styled.p`
  display: block;
  width: 100%;
  /* border-left: 5px solid rgba(0, 138, 90, 1); */
  margin-left: 1rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    background: rgba(0, 138, 90, 1);
    top: 0;
    left: -13px;
  }

`