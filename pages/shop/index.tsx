import Image from 'next/image'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import { getShopIndexProps } from '~/shopify/storefront/products'
import { styled } from 'stitches.config'
import tw, { theme } from 'twin.macro'

export const getStaticProps = getShopIndexProps

const ContainerDiv = styled('div', {
  display: 'grid',
  ...tw`max-w-5xl mx-auto`,
  ...tw`mt-8`,
  ...tw`grid-cols-1 p-4 gap-10 sm:grid-cols-2 sm:gap-0 place-items-center`,
  // display: 'grid',
  // gridTemplateColumns: 'repeat(1, 1fr)',
  // ...tw``
  // // gap: '2rem',
  // alignItems: 'center',
})

const ItemDiv = styled('div', {
  // position: 'relative',
})

const ShopIndexPage = ({
  collections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ContainerDiv>
      {collections.edges
        .map(({ node }) => node)
        .filter((node) => !!node.image)
        .map((node) => (
          <Link key={node.id} href={`/shop/${node.handle}`}>
            <a>
              <ItemDiv>
                <Image
                  src={node.image!.transformedSrc}
                  alt=""
                  width={400}
                  height={400}
                  // layout="fill"
                  objectFit="contain"
                />
              </ItemDiv>
              <h3>{node.title}</h3>
            </a>
          </Link>
        ))}
    </ContainerDiv>
  )
}

export default ShopIndexPage
