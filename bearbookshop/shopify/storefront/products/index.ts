import { pipe } from 'fp-ts/lib/function'
import { print } from 'graphql'
import { useMemo } from 'react'
import useSWR, { useSWRInfinite } from 'swr'
import { PER_PAGE } from '~/lib/const'
import { storefrontFetch } from '../../fetch'
import {
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  GetProductByHandleDocument,
  GetProductByHandleQuery,
  GetProductByHandleQueryVariables,
  GetProductTagsQuery,
} from '../documents'
import {
  getAllProductsQuery,
  getCollectionProductsQuery,
  getProductByHandle,
  getProductTagsQuery,
} from './queries'
import { queryToStaticPropsGetter } from './util'

export const getProductTags = async () =>
  pipe(
    await storefrontFetch<GetProductTagsQuery, {}>(getProductTagsQuery),
    (xs) => xs.shop.productTags.edges.map((x) => x.node)
  )

type ProductsQueryInput = {
  search?: string
  tags?: string[]
}

const productsFetch = (query: string, first: number, after?: string) =>
  storefrontFetch<GetAllProductsQuery, GetAllProductsQueryVariables>(
    getAllProductsQuery,
    { query, first, after }
  )

export const useProductsQuery = ({ search, tags }: ProductsQueryInput = {}) => {
  const query = useMemo(() => {
    let query = ''
    if (search) {
      query += search
    }

    if (tags && tags.length > 0) {
      query +=
        `${search ? ' AND ' : ''}` +
        tags.map((tag) => `tag:${tag}`).join(' AND ')
    }

    console.log(query)

    return query
  }, [search, tags])

  return useSWRInfinite<GetAllProductsQuery>((pageIndex, prevData) => {
    const after =
      prevData?.products.edges[prevData.products.edges.length - 1].cursor
    return [query, PER_PAGE, after]
  }, productsFetch)
}

export const getHomeProps = queryToStaticPropsGetter<
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables
>(getCollectionProductsQuery, { query: 'title:home', first: 3 })

export const useProductByHandle = (handle: string) => {
  const fetch = (handle: string) =>
    storefrontFetch<GetProductByHandleQuery, GetProductByHandleQueryVariables>(
      getProductByHandle,
      { handle }
    )
  return useSWR<GetProductByHandleQuery>(handle, fetch)
}
