import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { OpacityPresence, Spinner } from '~/components'
import { ProductPageView } from '~/components/shop'
import { Product } from '~/shopify/storefront/documents'
import { useProductByHandle } from '~/shopify/storefront/products'

const ProductPage = () => {
  const router = useRouter()
  const { data } = useProductByHandle(router.query.slug as string)
  useEffect(() => console.log({ data }), [data])
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {data ? (
          <OpacityPresence>
            <ProductPageView product={data.product as Product} />
          </OpacityPresence>
        ) : (
          <OpacityPresence>
            <Spinner />
          </OpacityPresence>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductPage
