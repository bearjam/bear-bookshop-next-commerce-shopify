import { gql } from 'graphql-request'
import { checkoutDetailsFragment } from './fragments'

export const getCheckoutById = gql`
  query getCheckoutById($id: ID!) {
    node(id: $id) {
      id
    }
  }
  ${checkoutDetailsFragment}
`
export const checkoutUpdateAttributesMutation = gql`
  mutation checkoutAttributesUpdateV2(
    $checkoutId: ID!
    $input: CheckoutAttributesUpdateV2Input!
  ) {
    checkoutAttributesUpdateV2(checkoutId: $checkoutId, input: $input) {
      checkout {
        id
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`
