import { ProductConnectionFragment } from '~/shopify/documents'

export type Product = ProductConnectionFragment['edges'][0]['node']
