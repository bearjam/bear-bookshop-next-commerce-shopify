import { wait } from '~/lib/async'
import { adminFetch } from '~/shopify/fetch'
import {
  CurrentBulkOperationQuery,
  ProductTagsBulkOperationMutation,
} from '../documents'
import {
  currentBulkOperationQuery,
  productTagsBulkOperationMutation,
} from './queries'
import fetch from 'node-fetch'
import JSONL from 'jsonl-parse-stringify'
import { pipe } from 'fp-ts/lib/function'
import { map, uniq } from 'fp-ts/lib/ReadonlyArray'
import { flatten } from 'fp-ts/lib/ReadonlyArray'
import { Eq } from 'fp-ts/lib/string'

export const getProductTags = async () => {
  const mutationResult = await adminFetch<ProductTagsBulkOperationMutation, {}>(
    productTagsBulkOperationMutation
  )

  let url: string | null = null
  let tries = 5
  let backoff = 250

  while (tries > 0) {
    const currentBulk = await adminFetch<CurrentBulkOperationQuery, {}>(
      currentBulkOperationQuery
    )
    url = currentBulk.currentBulkOperation?.url
    if (url !== null) break

    tries--
    await wait(backoff)
    backoff *= 2
  }

  if (url === null) throw new Error('bulk operation url null after 5 tries')

  return pipe(
    await fetch(url, { method: 'GET' })
      .then((x) => x.text())
      .then((x) => JSONL.parse(x)),
    map((x: any) => x.tags),
    flatten,
    uniq(Eq)
  ) as string[]
}

// (await fetch<ProductTagsQuery, {}>(productTagsQuery)).productTags.edges.map(
//   (x) => x.node
// )
