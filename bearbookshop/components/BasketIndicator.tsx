import React from 'react'
import Basket from './svg/Basket'
import clsx from 'clsx'
import css from './BasketIndicator.module.css'
import Link from 'next/link'
import { useCart } from '@framework/cart'

interface Props {}

const BasketIndicator = ({
  className,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { data } = useCart()
  const totalItems =
    data?.lineItems.reduce((acc, v) => acc + v.quantity, 0) ?? 0
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
