import { gql } from 'graphql-request'
import { productConnectionFragment } from './fragments'

export const getAllProductsQuery = gql`
  query getAllProducts(
    $query: String = ""
    $first: Int
    $after: String
    $last: Int
    $before: String
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    products(
      query: $query
      first: $first
      after: $after
      last: $last
      before: $before
      sortKey: $sortKey
      reverse: $reverse
    ) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`

export const getCollectionProductsQuery = gql`
  query getCollectionProducts(
    $query: String!
    $first: Int = 150
    $sortKey: ProductCollectionSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    collections(first: 1, query: $query) {
      edges {
        node {
          products(first: $first, sortKey: $sortKey, reverse: $reverse) {
            ...productConnection
          }
        }
      }
    }
  }
  ${productConnectionFragment}
`

export const productTagsQuery = gql`
  query ProductTags {
    productTags(first: 250) {
      edges {
        node
      }
    }
  }
`

// export const createMetafieldStorefrontVisibilityMutation = gql`
//   mutation MetafieldStorefrontVisibility(
//     $input: MetafieldStorefrontVisibilityInput!
//   ) {
//     metafieldStorefrontVisibilityCreate(input: $input) {
//       metafieldStorefrontVisibility {
//         id
//         key
//         namespace
//         ownerType
//       }
//     }
//   }
// `
