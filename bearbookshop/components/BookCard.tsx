import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Product } from '~/shopify/documents'
import css from './BookCard.module.css'
import { Button } from './inputs'
import { FlexCenter } from './layout/flex'

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
          <FlexCenter>
            {imgURL ? (
              <Image src={imgURL} width={250} height={300} alt={imgURL} />
            ) : (
              <h4>Image not found</h4>
            )}
          </FlexCenter>
          <h4>{title}</h4>
        </div>
      </a>
      <p>£{price}</p>
      <div className={css.button}>
        <Button onClick={addProduct}>Add to basket</Button>
      </div>
    </div>
  )
}

export default BookCard
