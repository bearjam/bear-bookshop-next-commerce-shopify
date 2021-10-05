import { useAddItem } from '@framework/cart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styled } from 'stitches.config'
import tw from 'twin.macro'
import { Product } from '~/types'
import { Button } from '../inputs'
import { Flex } from '../layout/flex'

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

const ProductListItem = ({ product }: ProductListItemProps) => {
  const { handle, title } = product

  const variant = product.variants.edges[0].node
  const price = Number(variant.priceV2.amount).toFixed(2)

  const image = product.images.edges[0].node
  const { altText, transformedSrc: imageSrc } = image

  const addCartItem = useAddItem()
  const addProduct = async () => {
    try {
      await addCartItem({
        variantId: String(variant.id),
        productId: String(product.id),
      })
    } catch (e) {
      console.log({ e })
    }
  }
  return (
    <Li>
      <Link href={`/shop/product/${handle}`}>
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

export default ProductListItem
