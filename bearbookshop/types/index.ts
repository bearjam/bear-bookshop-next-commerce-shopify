import { ProductConnectionFragment } from '~/shopify/storefront/documents'

export type Product = ProductConnectionFragment['edges'][0]['node']
