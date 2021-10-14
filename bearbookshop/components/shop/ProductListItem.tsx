import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styled } from 'stitches.config'
import tw from 'twin.macro'
import { useCart } from '~/shopify/storefront/cart'
import { Product } from '~/types'
import { Button } from '../inputs'
import { Flex } from '../layout/flex'
import AddToBasketButton from './AddToBasketButton'

type ProductListItemProps = {
  product: Product
}

const Li = styled('li', {
  listStyleType: 'none',
  ...tw`border-2 shadow-md rounded-lg`,
})

const Price = styled('div', {})

const Title = styled('h4', {
  textAlign: 'center',
  width: '75%',
  marginTop: '1rem',
})

const ProductListItem = ({ product }: ProductListItemProps) => {
  const { handle, title } = product

  const variant = product.variants.edges[0].node
  const price = Number(variant.priceV2.amount).toFixed(2)

  const image = product.images.edges[0]?.node
  if (!image) return null
  const { altText, transformedSrc: imageSrc } = image

  return (
    <Li>
      <Flex center direction="column">
        <Link href={`/shop/product/${handle}`}>
          <a>
            <Flex center direction="column">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  width={250}
                  height={300}
                  objectFit="contain"
                  alt={altText ?? 'Book cover image'}
                />
              ) : (
                <h4>Image not found</h4>
              )}
              <Title>{title}</Title>
            </Flex>
          </a>
        </Link>
        <Price>£{price}</Price>
        <AddToBasketButton id={String(variant.id)} quantity={1} />
      </Flex>
    </Li>
  )
}

export default ProductListItem
