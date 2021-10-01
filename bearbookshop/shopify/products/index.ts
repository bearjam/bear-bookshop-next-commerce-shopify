import { print } from 'graphql'
import { useMemo } from 'react'
import useSWR from 'swr'
import {
  GetAllProductsDocument,
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
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

type ProductsQueryInput = Omit<GetAllProductsQueryVariables, 'query'> & {
  search?: string
  tags?: string[]
}

export const useProductsQuery = ({
  search,
  tags,
  first,
  after,
  last,
  before,
}: ProductsQueryInput = {}) => {
  const vars = useMemo(() => {
    let query = ''

    if (search) {
      // query += `product_type:${search} OR title:${search} OR tag:${search} `
      query += `title:${search}*`
    }

    if (tags && tags.length > 0) {
      query +=
        `${search ? ' AND ' : ''}` +
        tags.map((tag) => `tag:${tag}`).join(' AND ')
    }

    // if (brandId) {
    //   query += `${search ? "AND " : ""}vendor:${brandId}`
    // }

    return {
      // categoryId,
      query,
      first,
      after,
      last,
      before,
      // ...getSortVariables(sort, !!categoryId),
      // ...(locale && {
      //   locale,
      // }),
    }
  }, [search, tags, first, after, last, before])

  return useSWR<GetAllProductsQuery>(
    [print(GetAllProductsDocument), vars],
    fetch
  )
}

export const getHomeProps = queryToStaticPropsGetter<
  GetCollectionProductsQuery,
  GetCollectionProductsQueryVariables
>(getCollectionProductsQuery, { query: 'title:home', first: 3 })
