import { LineItem } from '@commerce/types/cart'
import { useCart, useRemoveItem, useUpdateItem } from '@framework/cart'
import { Cart } from '@framework/types/cart'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { OpacityPresence, Spinner } from '~/components'
import { ButtonLink, IncrementField } from '~/components/inputs'
import css from './basket.module.css'

const LineItemRow = ({ item }: { item: LineItem }) => {
  // const [, dispatch] = useBasket()
  // const variables: StockCountByIsbnQueryVariables = useMemo(
  //   () => ({
  //     isbn: product.isbn,
  //   }),
  //   [product]
  // )

  // const { data: stockCountQuery } = useSWR<StockCountByIsbnQuery>(
  //   [print(StockCountByIsbnDocument), variables],
  //   fetcherGQL
  // )

  // const stockCount = item.

  console.log({ item })
  const removeItem = useRemoveItem()

  return (
    <tr key={item.id}>
      <td>
        {item.variant.image ? (
          <div className="relative h-20">
            <Image
              src={item.variant.image.url}
              alt="book cover"
              layout="fill"
            />
          </div>
        ) : null}
      </td>
      <td className="pl-4">{item.name}</td>
      <td>
        <IncrementField
          value={item.quantity}
          decrement={
            () => {}
            // void dispatch({
            //   type: 'UPDATE_QUANTITY',
            //   payload: {
            //     slug: product.slug,
            //     quantity: quantity - 1,
            //   },
            // })
          }
          increment={
            () => {}
            // void dispatch({
            //   type: 'UPDATE_QUANTITY',
            //   payload: {
            //     slug: product.slug,
            //     quantity: quantity + 1 <= stockCount ? quantity + 1 : quantity,
            //   },
            // })
          }
        />
      </td>
      <td>£{(item.variant.price * item.quantity).toFixed(2)}</td>
      <td>
        <button
          onClick={
            () => void removeItem({ id: item.id })

            // dispatch({
            //   type: 'REMOVE_PRODUCT',
            //   payload: product.slug,
            // })
          }
        >
          x
        </button>
      </td>
    </tr>
  )
}

const BasketPageWithData = ({ cart }: { cart: Cart }) => {
  console.log({ cart })

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
      <div>
        <h2>tmp</h2>
        <pre>{JSON.stringify({ cart }, null, 2)}</pre>
      </div>
      <div className={css.button}>
        <ButtonLink href="/api/checkout">Checkout</ButtonLink>
      </div>
    </OpacityPresence>
  )
}

const BasketPage = () => {
  const { data, isLoading, error } = useCart()

  console.log({ error })

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
