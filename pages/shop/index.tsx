import { ShopIndex } from '~/components/shop'
import { getProductTags } from '~/shopify/storefront/products'

export const getStaticProps = async () => {
  const tags = await getProductTags()

  return {
    props: {
      tags,
    },
  }
}

export default ShopIndex
