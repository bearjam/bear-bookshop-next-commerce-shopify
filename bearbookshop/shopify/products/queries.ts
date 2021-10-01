import { gql } from 'graphql-request'
import { productConnectionFragment } from './fragments'

export const getAllProductsQuery = gql`
  query getAllProducts(
    $query: String = ""
    $first: Int
    $after: String
    $sortKey: ProductSortKeys = RELEVANCE
  ) {
    products(query: $query, first: $first, after: $after, sortKey: $sortKey) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`

export const getCollectionProductsQuery = gql`
  query getCollectionProducts(
    $query: String!
    $first: Int!
    $after: String
    $sortKey: ProductCollectionSortKeys = RELEVANCE
  ) {
    collections(first: 1, query: $query) {
      edges {
        node {
          products(first: $first, after: $after, sortKey: $sortKey) {
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
