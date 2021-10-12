import { pipe } from 'fp-ts/lib/function'
import { useMemo } from 'react'
import useSWR, { useSWRInfinite } from 'swr'
import { PER_PAGE } from '~/lib/const'
import { storefrontFetch } from '../../fetch'
import {
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  GetCollectionsQuery,
  GetProductByHandleQuery,
  GetProductByHandleQueryVariables,
  GetProductTagsQuery,
} from '../documents'
import {
  getAllProductsQuery,
  getCollectionProductsQuery,
  getCollectionsQuery,
  getProductByHandleQuery,
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
  type?: string
}

const productsFetch = (input: any) => {
  const { query, after } = JSON.parse(input)
  return storefrontFetch<GetAllProductsQuery, GetAllProductsQueryVariables>(
    getAllProductsQuery,
    { query, after }
  )
}

export const useProductsQuery = ({
  search,
  tags,
  type,
}: ProductsQueryInput = {}) => {
  const query = useMemo(() => {
    let query = ''
    if (search) {
      query += search
    }

    query += `${search ? ' AND ' : ''}` + 'available_for_sale:true'

    if (tags && tags.length > 0) {
      query +=
        `${search ? ' AND ' : ''}` +
        tags.map((tag) => `tag:${tag}`).join(' AND ')
    }

    if (!!type) {
      query += ` AND product_type:${type}`
    }

    return query
  }, [search, tags, type])

  return useSWRInfinite<GetAllProductsQuery>((pageIndex, prevData) => {
    if (prevData && !prevData.products.pageInfo.hasNextPage) return null // reached the end
    if (pageIndex === 0) return JSON.stringify({ query, after: null })

    const after =
      prevData?.products.edges[prevData.products.edges.length - 1].cursor ??
      null

    return JSON.stringify({ query, after })
  }, productsFetch)
}

export const getHomeProps = queryToStaticPropsGetter<
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables
>(getCollectionProductsQuery, { query: 'title:home', first: 3 })

export const getShopIndexProps = queryToStaticPropsGetter<
  GetCollectionsQuery,
  {}
>(getCollectionsQuery, {})

export const useProductByHandle = (handle: string) => {
  const fetch = (handle: string) =>
    storefrontFetch<GetProductByHandleQuery, GetProductByHandleQueryVariables>(
      getProductByHandleQuery,
      { handle }
    )
  return useSWR<GetProductByHandleQuery>(handle, fetch)
}
