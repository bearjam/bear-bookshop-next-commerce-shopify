import { print } from 'graphql'
import { useMemo } from 'react'
import useSWR from 'swr'
import {
  GetAllProductsDocument,
  GetAllProductsQuery,
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  ProductTagsQuery,
} from '../documents'
import fetch from '../fetch'
import { getCollectionProductsQuery, productTagsQuery } from './queries'
import getSearchVars, { queryToStaticPropsGetter } from './util'

export const getProductTags = async () =>
  (await fetch<ProductTagsQuery, {}>(productTagsQuery)).productTags.edges.map(
    (x) => x.node
  )

type ProductsQueryInput = {
  search?: string
  tags?: string[]
}

export const useProductsQuery = ({ search, tags }: ProductsQueryInput = {}) => {
  const vars = useMemo(() => getSearchVars({ search, tags }), [search, tags])

  console.log(print(GetAllProductsDocument), vars)
  return useSWR<GetAllProductsQuery>(
    [print(GetAllProductsDocument), vars],
    fetch
  )
}

export const getHomeProps = queryToStaticPropsGetter<
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables
>(getCollectionProductsQuery, { query: 'title:home', first: 3 })
