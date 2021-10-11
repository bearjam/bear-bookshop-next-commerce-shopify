import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { useCart } from '~/shopify/storefront/cart'
import css from './BasketIndicator.module.css'
import Basket from './svg/Basket'

interface Props {}

const BasketIndicator = ({
  className,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { totalItems } = useCart()
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
