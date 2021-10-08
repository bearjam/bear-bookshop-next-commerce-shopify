import React, { useEffect } from 'react'
import Basket from './svg/Basket'
import clsx from 'clsx'
import css from './BasketIndicator.module.css'
import Link from 'next/link'
import { useCart } from '~/shopify/storefront/cart'

interface Props {}

const BasketIndicator = ({
  className,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { cart } = useCart()
  const totalItems =
    cart?.lines.edges.reduce((acc: number, v) => acc + v.node.quantity, 0) ?? 0

  return (
    <div className={clsx(css.root, className)} {...props}>
      <Link href="/basket">
        <a>
          <Basket />
          <div>{totalItems}</div>
        </a>
      </Link>
    </div>
  )
}

export default BasketIndicator
