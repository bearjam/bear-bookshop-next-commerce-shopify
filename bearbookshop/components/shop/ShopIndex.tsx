import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import * as z from 'zod'
import { MultiCheckCombobox, TextField } from '~/components/inputs'
import { useProductsQuery } from '~/shopify/products'
import OpacityPresence from '../OpacityPresence'
import Spinner from '../Spinner'
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
  const { data, ...rest } = useProductsQuery({ search: q, tags })

  return (
    <div className={css.root}>
      <AnimatePresence exitBeforeEnter>
        {data ? (
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
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </OpacityPresence>
        ) : (
          <OpacityPresence>
            <Spinner />
            <pre>{JSON.stringify(rest, null, 2)}</pre>
          </OpacityPresence>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ShopIndex
