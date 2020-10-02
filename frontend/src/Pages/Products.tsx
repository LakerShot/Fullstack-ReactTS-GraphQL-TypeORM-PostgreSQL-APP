import React from 'react'
import styled from 'styled-components';
import { ProductsList } from '../Components/ProductsList';
import { useAllProductsQuery } from '../generated/graphql'

export const Products: React.FC = () => {
  const {data} = useAllProductsQuery()

  if (!data) return <div>loading...</div>

  return (
    <ProductsSection >
      <ProductsWrapper>
        <ProductsRow >
          <ProductsList products={data.allProducts}/>
        </ProductsRow>
      </ProductsWrapper>
    </ProductsSection>
  )
}

const ProductsSection = styled.section`
  width: 100%;
`

const ProductsWrapper = styled.div`
  width: 90%;
  margin: 2rem auto 0 auto;
`

const ProductsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  /* grid-auto-rows: 450px; */
`


