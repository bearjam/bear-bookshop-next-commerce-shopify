import { gql } from 'graphql-request'

export const cartDetailsFragment = gql`
  fragment cartDetails on Cart {
    id
    checkoutUrl
    createdAt
    updatedAt
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              image {
                transformedSrc(maxWidth: 240)
              }
              product {
                handle
                title
                totalInventory
              }
              priceV2 {
                amount
              }
            }
          }
          attributes {
            key
            value
          }
        }
      }
    }
    attributes {
      key
      value
    }
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
    buyerIdentity {
      email
      phone
      customer {
        id
      }
      countryCode
    }
  }
`
