import { useAddItem, useCart } from '@framework/cart'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, forwardRef } from 'react'
import { styled } from 'stitches.config'
import tw from 'twin.macro'
import { Product } from '~/types'
import { Button } from '../inputs'
import { Flex } from '../layout/flex'

export const ProductList = styled(Flex, {
  defaultVariants: {
    center: true,
    wrap: true,
  },
})

type ProductListItemProps = {
  product: Product
}

const Li = styled('li', {
  listStyleType: 'none',
  ...tw`border-2 shadow-md rounded-lg`,
})

const Price = styled('div', {})

const Title = styled('div', {})

const ButtonContainer = styled('div', {})

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const { handle, title, id } = product
  const image = product.images.edges[0].node
  const { altText, transformedSrc: imageSrc } = image
  const price = Number(product.priceRange.minVariantPrice.amount).toFixed(2)
  const addCartItem = useAddItem()
  const addProduct = () => void addCartItem({ variantId: id })
  return (
    <Li>
      <Link href={`/shop/products/${handle}`}>
        <a>
          <Flex center>
            {imageSrc ? (
              <Image
                src={imageSrc}
                width={250}
                height={300}
                alt={altText ?? 'Book cover image'}
              />
            ) : (
              <h4>Image not found</h4>
            )}
          </Flex>
          <Title>{title}</Title>
        </a>
      </Link>
      <Price>{price}</Price>
      <ButtonContainer>
        <Button onClick={addProduct}>Add to basket</Button>
      </ButtonContainer>
    </Li>
  )
}
