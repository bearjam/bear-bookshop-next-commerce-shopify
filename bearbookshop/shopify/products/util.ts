import { GetAllProductsQueryVariables } from '../documents'
import storefrontFetch from '../fetch'

export const queryToStaticPropsGetter =
  <T extends object, V extends object>(query: string, variables?: V) =>
  async () => ({
    props: {
      ...(await storefrontFetch<T, V>(query, variables)),
    },
  })

type GetSearchVarsArgs = {
  search?: string
  tags?: string[]
  // categoryId?: string | number
  // brandId?: string | number
  // sort?: string
  // locale?: string
}

export const getSearchVars = ({
  search,
  tags,
}: // categoryId,
// brandId,
// sort,
// locale,
GetSearchVarsArgs): GetAllProductsQueryVariables => {
  let query = ''

  if (search) {
    // query += `product_type:${search} OR title:${search} OR tag:${search} `
    query += `title:${search}*`
  }

  if (tags && tags.length > 0) {
    query +=
      `${search ? ' AND ' : ''}` + tags.map((tag) => `tag:${tag}`).join(' AND ')
  }

  // if (brandId) {
  //   query += `${search ? "AND " : ""}vendor:${brandId}`
  // }

  return {
    // categoryId,
    query,
    // ...getSortVariables(sort, !!categoryId),
    // ...(locale && {
    //   locale,
    // }),
  }
}

export default getSearchVars
