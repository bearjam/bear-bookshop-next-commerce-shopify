import { gql } from 'graphql-request'

export const productFragment = gql`
  fragment product on Product {
    id
    title
    handle
    descriptionHtml
    variants(first: 1) {
      edges {
        node {
          id
          priceV2 {
            amount
          }
        }
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
    totalInventory
  }
`

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
        handle
        variants(first: 1) {
          edges {
            node {
              id
              priceV2 {
                amount
              }
            }
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
