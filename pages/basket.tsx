import { ButtonLink, IncrementField } from '~/components/inputs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import useSWR from 'swr'
import css from './basket.module.css'
import { useCart } from '@framework/cart'
import { AnimatePresence } from 'framer-motion'
import { OpacityPresence, Spinner } from '~/components'
import { LineItem } from '@commerce/types/cart'
import { useProductByHandle } from '~/shopify/storefront/products'

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
          onClick={() => {
            // dispatch({
            //   type: 'REMOVE_PRODUCT',
            //   payload: product.slug,
            // })
          }}
        >
          x
        </button>
      </td>
    </tr>
  )
}

const BasketPage = () => {
  const { data } = useCart()
  const total = data?.totalPrice ?? 0

  // query the rest of the data

  return (
    <div className={css.root}>
      <AnimatePresence exitBeforeEnter>
        {!data ? (
          <OpacityPresence>
            <Spinner />
          </OpacityPresence>
        ) : data.lineItems.length < 1 ? (
          <OpacityPresence>
            <div className={css.empty}>
              <h4>Your basket is empty!</h4>
              <ButtonLink href="/shop">Back to shop</ButtonLink>
            </div>
          </OpacityPresence>
        ) : (
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
                {data.lineItems.map((lineItem) => (
                  <LineItemRow key={lineItem.id} item={lineItem} />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <td>£{total}</td>
                </tr>
              </tfoot>
            </table>
            <div>
              <h2>tmp</h2>
              <pre>{JSON.stringify({ data }, null, 2)}</pre>
            </div>
            <div className={css.button}>
              <ButtonLink href="/api/checkout">Checkout</ButtonLink>
            </div>
          </OpacityPresence>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BasketPage
