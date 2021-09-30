import { requestWithHeaders } from '~/lib/fetch'

const API = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql.json`

const storefrontFetch = requestWithHeaders(API, {
  'X-Shopify-Storefront-Access-Token':
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
})

export default storefrontFetch
