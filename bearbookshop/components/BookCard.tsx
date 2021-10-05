import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Product } from '~/shopify/documents'
import css from './BookCard.module.css'
import { Button } from './inputs'
import { Flex } from './layout/flex'

type Props = PropsWithChildren<{
  product: Product
}>

const BookCard = ({ product }: Props) => {
  const {
    title,
    priceRange: {
      minVariantPrice: { amount: price },
    },
    images,
    handle,
  } = product
  const imgURL = images.edges[0].node.transformedSrc

  const addProduct = () => {}

  return (
    <div className={css.card}>
      <a href={`/shop/books/${handle}`}>
        <div>
          <Flex center>
            {imgURL ? (
              <Image src={imgURL} width={250} height={300} alt={imgURL} />
            ) : (
              <h4>Image not found</h4>
            )}
          </Flex>
          <h4>{title}</h4>
        </div>
      </a>
      <p>£{Number(price).toFixed(2)}</p>
      <div className={css.button}>
        <Button onClick={addProduct}>Add to basket</Button>
      </div>
    </div>
  )
}

export default BookCard
