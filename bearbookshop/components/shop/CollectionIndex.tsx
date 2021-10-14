import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { useCollectionProducts } from '~/shopify/storefront/products'
import { Product } from '~/types'
import { ProductList, ProductListItem } from '.'
import { OpacityPresence, Spinner } from '..'
import css from './BooksIndex.module.css'

const CollectionIndex = () => {
  const router = useRouter()
  const collection = router.query.collection as string
  const { data, error } = useCollectionProducts(collection)
  const loading = !data && !error

  return (
    <div className={css.root}>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <OpacityPresence>
            <Spinner />
          </OpacityPresence>
        ) : (
          <OpacityPresence>
            <ProductList>
              {data &&
                data.products.edges.map(({ node }) => (
                  <ProductListItem
                    key={node.handle}
                    product={node as Product}
                  />
                ))}
            </ProductList>
          </OpacityPresence>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CollectionIndex
