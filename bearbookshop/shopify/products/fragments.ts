import { gql } from 'graphql-request'

export const productConnectionFragment = gql`
  fragment productConnection on ProductConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        vendor
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc(maxWidth: 480)
              altText
              width
              height
            }
          }
        }
        authors: metafield(namespace: "bearbookshop", key: "authors") {
          value
        }
        tags
      }
    }
  }
`
