import { gql } from 'graphql-request'

export const currentBulkOperationQuery = gql`
  query currentBulkOperation {
    currentBulkOperation {
      id
      status
      errorCode
      createdAt
      completedAt
      objectCount
      fileSize
      url
      partialDataUrl
    }
  }
`

export const productTagsBulkOperationMutation = gql`
  mutation productTagsBulkOperation {
    bulkOperationRunQuery(
      query: """
      {
        products {
          edges {
            node {
              tags
            }
          }
        }
      }
      """
    ) {
      bulkOperation {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }
`
