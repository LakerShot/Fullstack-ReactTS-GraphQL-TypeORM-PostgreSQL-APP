import React from 'react'
import { AllProductInterface } from '../interfaces/AllProductInterface'
import { Product } from './Product'

interface ProductsProps {
  products: AllProductInterface[]
}

export const ProductsList: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          imgSrcUrl={product.imgSrcUrl}
          about_product={product.about_product}
        />
      ))}
    </>
  )
}
