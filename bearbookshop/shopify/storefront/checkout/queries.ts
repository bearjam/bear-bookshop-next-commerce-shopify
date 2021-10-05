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
