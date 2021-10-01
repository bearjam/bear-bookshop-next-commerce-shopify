import { print } from 'graphql'
import { useMemo } from 'react'
import useSWR, { useSWRInfinite } from 'swr'
import { PER_PAGE } from '~/lib/const'
import {
  GetAllProductsDocument,
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables,
  ProductTagsQuery,
} from '../documents'
import storefrontFetch from '../fetch'
import fetch from '../fetch'
import {
  getAllProductsQuery,
  getCollectionProductsQuery,
  productTagsQuery,
} from './queries'
import getSearchVars, { queryToStaticPropsGetter } from './util'

export const getProductTags = async () =>
  (await fetch<ProductTagsQuery, {}>(productTagsQuery)).productTags.edges.map(
    (x) => x.node
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
      query += `title:${search}*`
    }
    if (tags && tags.length > 0) {
      query +=
        `${search ? ' AND ' : ''}` +
        tags.map((tag) => `tag:${tag}`).join(' AND ')
    }
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
