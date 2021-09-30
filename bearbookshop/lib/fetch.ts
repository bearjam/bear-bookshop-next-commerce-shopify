import { GraphQLClient } from 'graphql-request'

export const requestWithHeaders = (
  api: string,
  headers: { [key: string]: string }
) => {
  const client = new GraphQLClient(api, { headers })
  return <T, V>(query: string, variables?: V): Promise<T> =>
    client.request<T, V>(query, variables)
}
