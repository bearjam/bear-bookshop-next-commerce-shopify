import {
  SHOPIFY_ADMIN_API_ENDPOINT,
  SHOPIFY_STOREFRONT_API_ENDPOINT,
} from '~/lib/const'
import { requestWithHeaders } from '~/lib/fetch'

export const storefrontFetch = requestWithHeaders(
  SHOPIFY_STOREFRONT_API_ENDPOINT,
  {
    'X-Shopify-Storefront-Access-Token':
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  }
)

export const adminFetch = requestWithHeaders(SHOPIFY_ADMIN_API_ENDPOINT, {
  'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!,
})
