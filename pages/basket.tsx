import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { OpacityPresence, Spinner } from '~/components'
import BasketNoteForm from '~/components/BasketNoteForm'
import { ButtonLink, IncrementField } from '~/components/inputs'
import { useCart } from '~/shopify/storefront/cart'
import { CartDetailsFragment } from '~/shopify/storefront/documents'
import css from './basket.module.css'

type LineItem = CartDetailsFragment['lines']['edges'][0]['node']

const LineItemRow = ({ item }: { item: LineItem }) => {
  const [removing, setRemoving] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)
  const { removeItem, updateItem } = useCart()

  const inStock = item.merchandise.product.totalInventory ?? 0

  const handleChange = async (value: number) => {
    if (value > inStock || value < 0) return
    setQuantity(value)
    await updateItem({ id: item.id, quantity: value })
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item.id)
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
    <tr key={item.id} data-removing={removing}>
      <td>
        <div className="relative h-20">
          <Image
            src={item.merchandise.image?.transformedSrc}
            alt="book cover"
            layout="fill"
          />
        </div>
      </td>
      <td className="pl-4">{item.merchandise.product.title}</td>
      <td>
        <IncrementField
          value={quantity}
          decrement={() => handleChange(quantity - 1)}
          increment={() => handleChange(quantity + 1)}
        />
      </td>
      <td>£{(item.merchandise.priceV2.amount * item.quantity).toFixed(2)}</td>
      <td>
        <button onClick={handleRemove}>x</button>
      </td>
    </tr>
  )
}

const BasketPageWithData = ({ cart }: { cart: CartDetailsFragment }) => {
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
          {cart.lines.edges.map(({ node }) => (
            <LineItemRow key={node.id} item={node} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>
              £{Number(cart.estimatedCost.subtotalAmount.amount).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <BasketNoteForm />
      </div>
      <div className={css.button}>
        <ButtonLink href={cart.checkoutUrl}>Checkout</ButtonLink>
      </div>
    </OpacityPresence>
  )
}

const BasketPage = () => {
  const { cart, loading, error } = useCart()

  return (
    <div className={css.root}>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <OpacityPresence>
            <Spinner />
          </OpacityPresence>
        ) : error ? (
          <OpacityPresence>
            <h2>Error</h2>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </OpacityPresence>
        ) : !cart || cart.lines.edges.length < 1 ? (
          <OpacityPresence>
            <div className={css.empty}>
              <h4>Your basket is empty!</h4>
              <ButtonLink href="/shop">Back to shop</ButtonLink>
            </div>
          </OpacityPresence>
        ) : (
          <OpacityPresence>
            <BasketPageWithData cart={cart} />
          </OpacityPresence>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BasketPage
