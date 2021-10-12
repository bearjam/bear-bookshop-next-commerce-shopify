import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Product } from '~/types'
import css from './BookCard.module.css'
import { Button } from './inputs'
import { Flex } from './layout/flex'
import AddToBasketButton from './shop/AddToBasketButton'

type Props = PropsWithChildren<{
  product: Product
}>

const BookCard = ({ product }: Props) => {
  const { title, images, handle } = product
  const variant = product.variants.edges[0].node
  const price = Number(variant.priceV2.amount).toFixed(2)

  const imgURL = images.edges[0].node.transformedSrc

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
        <AddToBasketButton id={String(variant.id)} quantity={1} />
      </div>
    </div>
  )
}

export default BookCard
