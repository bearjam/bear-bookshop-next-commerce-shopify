import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import * as z from 'zod'
import { MultiCheckCombobox, TextField } from '~/components/inputs'
import { Product, ProductEdge } from '~/shopify/documents'
import { useProductsQuery } from '~/shopify/products'
import BookCard from '../BookCard'
import OpacityPresence from '../OpacityPresence'
import Spinner from '../Spinner'
import BooksView from './BooksView'
import css from './ShopIndex.module.css'

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
  const { data, error } = useProductsQuery({ search: q, tags, first: 9 })
  useEffect(() => {
    console.log({ data, error })
  }, [data, error])

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
          {data ? (
            <OpacityPresence>
              <h2>Books</h2>
              {data.products.edges.length > 0 ? (
                <BooksView edges={data.products.edges as ProductEdge[]} />
              ) : (
                <h3>No books found!</h3>
              )}
            </OpacityPresence>
          ) : (
            <OpacityPresence>
              <Spinner />
            </OpacityPresence>
          )}
        </OpacityPresence>
      </AnimatePresence>
    </div>
  )
}

export default ShopIndex
