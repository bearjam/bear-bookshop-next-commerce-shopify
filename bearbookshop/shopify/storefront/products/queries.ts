import { gql } from 'graphql-request'
import { productConnectionFragment, productFragment } from './fragments'

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

export const getProductTagsQuery = gql`
  query getProductTags {
    shop {
      productTags(first: 250) {
        edges {
          node
        }
      }
    }
  }
`

export const getProductByHandleQuery = gql`
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }

  ${productFragment}
`

export const getCollectionsQuery = gql`
  query getCollections {
    collections(first: 6) {
      edges {
        node {
          id
          image {
            transformedSrc(maxWidth: 640)
          }
          title
          handle
        }
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
