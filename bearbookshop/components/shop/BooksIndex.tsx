import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { useDebouncedCallback } from 'use-debounce'
import * as z from 'zod'
import { MultiCheckCombobox, TextField } from '~/components/inputs'
import { useProductsQuery } from '~/shopify/storefront/products'
import { Product } from '~/types'
import { ProductList, ProductListItem } from '.'
import OpacityPresence from '../OpacityPresence'
import Spinner from '../Spinner'
import css from './BooksIndex.module.css'

type Props = {
  tags: string[]
}

const ShopIndex = ({ tags: allTags }: Props) => {
  const router = useRouter()
  const query = router.query
  const q = z.string().default('').parse(query.q)

  const setQ_ = (q: string) => void router.push({ query: { ...query, q } })
  const setQ = useDebouncedCallback((value) => void setQ_(value), 1000)
  const tags = useMemo(
    () => (typeof query.tags === 'string' ? [query.tags] : query.tags ?? []),
    [query.tags]
  )
  const setTags = (ts: string[]) =>
    void router.push({ query: { ...query, tags: ts } })

  const { data, error, setSize, size } = useProductsQuery({
    search: q,
    tags,
    type: 'Book',
  })

  const loading = !data && !error

  const hasNextPage =
    (data && data[data?.length - 1].products.pageInfo.hasNextPage) ?? false

  const loadMore = useCallback(() => void setSize((p) => p + 1), [setSize])

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
  })

  return (
    <div className={css.root}>
      <AnimatePresence exitBeforeEnter>
        <OpacityPresence>
          <div className={css.search}>
            <TextField
              label="Search"
              placeholder="Author/Title"
              defaultValue={q}
              onChange={(e) => void setQ(e.currentTarget.value)}
            />
          </div>
          <MultiCheckCombobox
            initialItems={allTags}
            itemToString={(x) => x ?? ''}
            label="Filters"
            selectedItems={tags}
            setSelectedItems={setTags}
            placeholder="Select tags"
          />
          <ProductList>
            {data &&
              data.map(({ products }) =>
                products.edges.map(({ node }) => (
                  <ProductListItem
                    key={node.handle}
                    product={node as Product}
                  />
                ))
              )}
          </ProductList>
          {hasNextPage && <Spinner ref={sentryRef} />}
        </OpacityPresence>
      </AnimatePresence>
    </div>
  )
}

export default ShopIndex
