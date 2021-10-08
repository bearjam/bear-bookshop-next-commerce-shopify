import Link from 'next/link'
import React from 'react'

const ShopIndexPage = () => {
  return (
    <div>
      <h2>todo put some links here</h2>
      <Link href="/shop/books">
        <a>Books</a>
      </Link>
      <Link href="/shop/subscriptions">
        <a>Subscriptions</a>
      </Link>
    </div>
  )
}

export default ShopIndexPage
