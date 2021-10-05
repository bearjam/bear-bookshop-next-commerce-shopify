import { useCart, useRemoveItem, useUpdateItem } from '@framework/cart'
import { Cart, LineItem } from '@framework/types/cart'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { OpacityPresence, Spinner } from '~/components'
import { ButtonLink, IncrementField } from '~/components/inputs'
import { useProductByHandle } from '~/shopify/storefront/products'
import css from './basket.module.css'

const LineItemRow = ({ item }: { item: LineItem }) => {
  if (!item.variant) throw new Error('No item variant')
  const [removing, setRemoving] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)
  const { data } = useProductByHandle(item.path)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem({ item })

  const inStock = data?.product?.totalInventory ?? 0

  const handleChange = async (value: number) => {
    if (value > inStock || value < 0) return
    setQuantity(value)
    await updateItem({ quantity: value })
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item)
    } catch (error) {
      setRemoving(false)
    }
  }

  useEffect(() => {
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.quantity])

  // maybe opacity when removing

  return (
    <tr key={item.id}>
      <td>
        {!data ? (
          <Spinner />
        ) : (
          <div className="relative h-20">
            <Image
              src={data.product?.images.edges[0].node.transformedSrc}
              alt="book cover"
              layout="fill"
            />
          </div>
        )}
      </td>
      <td className="pl-4">{item.name}</td>
      <td>
        <IncrementField
          value={quantity}
          decrement={() => handleChange(quantity - 1)}
          increment={() => handleChange(quantity + 1)}
        />
      </td>
      <td>£{(item.variant.price * item.quantity).toFixed(2)}</td>
      <td>
        <button onClick={handleRemove}>x</button>
      </td>
    </tr>
  )
}

const BasketPageWithData = ({ cart }: { cart: Cart }) => {
  return (
    <OpacityPresence>
      <h1>Basket</h1>
      <Link href="/shop">
        <a>
          <h4>Continue shopping</h4>
        </a>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.lineItems.map((lineItem) => (
            <LineItemRow key={lineItem.id} item={lineItem} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>£{cart.subtotalPrice}</td>
          </tr>
        </tfoot>
      </table>
      <div className={css.button}>
        <ButtonLink href="/api/checkout">Checkout</ButtonLink>
      </div>
    </OpacityPresence>
  )
}

const BasketPage = () => {
  const { data, isLoading, error } = useCart()

  return (
    <div className={css.root}>
      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <OpacityPresence>
            <Spinner />
          </OpacityPresence>
        ) : error ? (
          <OpacityPresence>
            <h2>Error</h2>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </OpacityPresence>
        ) : !data || data.lineItems.length < 1 ? (
          <OpacityPresence>
            <div className={css.empty}>
              <h4>Your basket is empty!</h4>
              <ButtonLink href="/shop">Back to shop</ButtonLink>
            </div>
          </OpacityPresence>
        ) : data ? (
          <OpacityPresence>
            <BasketPageWithData cart={data} />
          </OpacityPresence>
        ) : (
          <OpacityPresence>
            <h2>nothing!</h2>
          </OpacityPresence>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BasketPage
