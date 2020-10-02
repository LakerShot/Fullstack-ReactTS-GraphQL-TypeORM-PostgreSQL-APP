export const mockProducts: mockProductsInterface[] =  [
  {
    id: 10,
    title: 'Product #10',
    about_product: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrcUrl: 'https://berryworld.imgix.net/assets/berry-best-porridge-recipe.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1500&q=60&w=2300'
  },
  {
    id: 11,
    title: 'Product #11',
    about_product: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrcUrl: 'https://berryworld.imgix.net/assets/berry-best-porridge-recipe.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1500&q=60&w=2300'
  },
  {
    id: 12,
    title: 'Product #12',
    about_product: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSrcUrl: 'https://berryworld.imgix.net/assets/berry-best-porridge-recipe.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1500&q=60&w=2300'
  },
]

export interface mockProductsInterface {
  id?: number
  title: string
  about_product: string
  imgSrcUrl: string
  amount?: number
  isRunOut?: boolean
}


