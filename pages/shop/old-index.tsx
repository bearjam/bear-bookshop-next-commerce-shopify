import useSearch from '@commerce/product/use-search'
import { CommerceProvider } from '@framework'
import React, { useMemo } from 'react'

const ShopIndexPage = () => {
  const foo = useSearch()
  const n = useMemo(() => foo.data?.products.length ?? 0, [foo])
  return (
    <div>
      <h2>{n}</h2>
      <pre>{JSON.stringify(foo, null, 2)}</pre>
    </div>
  )
}

ShopIndexPage.Layout = ({ children }: any) =>
  (<CommerceProvider>{children}</CommerceProvider>) as any

export default ShopIndexPage
