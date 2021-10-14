import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import BookCard from '~/components/BookCard'
import { ButtonLink } from '~/components/inputs'
import { Flex } from '~/components/layout/flex'
import { ProductList, ProductListItem } from '~/components/shop'
import { getHomeProps } from '~/shopify/storefront/products'
import { Product } from '~/types'
import css from './index.module.css'

export const getStaticProps = getHomeProps

const IndexPage = ({
  collections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const products = collections.edges[0].node.products.edges.map((x) => x.node)
  return (
    <div className={css.root}>
      <div className={css.splash}>
        <div className={css.splashImg}>
          <Image
            src="/bear-bookshop-window-art.jpg"
            alt="shop front"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1>Welcome to Bear Bookshop</h1>
          <p>Bringing the joy of stories to families in Bearwood and beyond.</p>
          <div className="mt-8">
            <ButtonLink href="/visit">Visit us</ButtonLink>
          </div>
        </div>
      </div>
      <div className={css.padded}>
        <div className={css.shop}>
          <h2>Find magic books for curious kids</h2>
          <p>
            Hand-picked books that you’ll love as much as your little ones do.
            We deliver across the UK.
          </p>
          <ProductList>
            {products.map((ps) => (
              <ProductListItem key={ps.handle} product={ps as Product} />
            ))}
          </ProductList>
          <Flex center>
            <ButtonLink href="/shop">Shop all books</ButtonLink>
          </Flex>
        </div>
        <div className={css.discover}>
          {/* <div className="relative" style={{ height: "32rem" }}> */}
          <Image
            src="/jenny-kids.jpg"
            alt="jenny kids"
            width={2500}
            height={1669}
            // layout="fill"
            // objectFit="cover"
          />
          {/* </div> */}
          <h2>Discover the wonder of reading</h2>
          <p>
            Our learning resources are designed to help you support your child
            to learn about the world through stories.
          </p>
          <div className={css.button}>
            <ButtonLink href="/learn">Learn with us</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
