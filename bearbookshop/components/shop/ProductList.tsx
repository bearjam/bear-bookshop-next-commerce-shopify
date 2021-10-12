import { styled } from 'stitches.config'
import tw from 'twin.macro'
import { Flex } from '../layout/flex'

// const ProductList = styled(Flex, {
//   defaultVariants: {
//     center: true,
//     wrap: true,
//   },
// })

const ProductList = styled('div', {
  display: 'grid',
  ...tw`grid-cols-1 sm:grid-cols-3 justify-items-stretch`,
  gap: '2rem',
})

export default ProductList
