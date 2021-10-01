import React from 'react'
import { Product, ProductEdge } from '~/shopify/documents'
import BookCard from '../BookCard'
import { Flex } from '../layout/flex'

type Props = {
  edges: ProductEdge[]
}

const BooksView = ({ edges }: Props) => {
  return (
    <Flex justify="between" wrap>
      {edges.map(({ cursor, node }) => (
        <BookCard key={cursor} product={node as Product} />
      ))}
    </Flex>
  )
}

export default BooksView
