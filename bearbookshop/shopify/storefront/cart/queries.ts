import { gql } from 'graphql-request'
import { cartDetailsFragment } from './fragments'

export const createCartMutation = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        ...cartDetails
      }
    }
  }
  ${cartDetailsFragment}
`

export const getCartQuery = gql`
  query getCart($id: ID!) {
    cart(id: $id) {
      ...cartDetails
    }
  }
  ${cartDetailsFragment}
`

export const cartLinesAddMutation = gql`
  mutation cartLinesAdd($lines: [CartLineInput!]!, $cartId: ID!) {
    cartLinesAdd(lines: $lines, cartId: $cartId) {
      cart {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`

export const cartLinesRemoveMutation = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`

export const cartLinesUpdateMutation = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`

export const cartNoteUpdateMutation = gql`
  mutation cartNoteUpdate($cartId: ID!, $note: String!) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`
