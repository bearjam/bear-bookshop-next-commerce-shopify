import React, { useState } from 'react'
import { ProductFragment } from '~/shopify/storefront/documents'
import css from './ProductPageView.module.css'
import Image from 'next/image'
import { Button } from '../inputs'
import { useAddItem } from '@framework/cart'

type Props = {
  product: ProductFragment
}

const ProductPageView = ({ product }: Props) => {
  const { title, images, variants } = product
  const variant = variants.edges[0].node
  const price = Number(variant.priceV2.amount).toFixed(2)
  const authors = product.authors?.value.split('\n')

  const imgURL = images.edges[0].node.transformedSrc

  const totalInventory = product.totalInventory ?? 0

  const description = (product.descriptionHtml as string).split('---')[0].trim()

  const [quantity, setQuantity] = useState(1)

  function increment() {
    setQuantity((previous) =>
      previous + 1 <= totalInventory ? previous + 1 : totalInventory
    )
  }

  function decrement() {
    setQuantity((previous) => (quantity > 1 ? previous - 1 : previous))
  }

  const addCartItem = useAddItem()
  const addProduct = async () => {
    try {
      await addCartItem({
        variantId: String(variant.id),
        productId: String(product.id),
        quantity,
      })
    } catch (e) {
      console.log({ e })
    }
  }
  return (
    <div className={css.root}>
      <a href="../">
        <h4>Back to all books</h4>
      </a>
      <div className={css.main}>
        <div className={css.title}>
          <h3>{title}</h3>
          {authors && <h4>{authors.join(', ')}</h4>}
          <p>£{price}</p>
        </div>
        <div className={css.img}>
          {imgURL ? (
            <div className="relative h-64">
              <Image
                src={imgURL}
                alt="book cover"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : (
            <h4>Image not found</h4>
          )}
        </div>
      </div>
      <div className={css.lower}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div className={css.quantity}>
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <Button onClick={addProduct}>Add to basket</Button>
      </div>
    </div>
  )
}

export default ProductPageView
