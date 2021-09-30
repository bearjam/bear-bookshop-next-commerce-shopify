import { InferGetStaticPropsType } from 'next'
import React, { Fragment } from 'react'
import { getHomeProps } from '~/shopify/products'

export const getStaticProps = getHomeProps

const IndexPage = ({
  collections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const products = collections.edges[0].node.products.edges.map((x) => x.node)
  return (
    <Fragment>
      <div>
        <h2>hi</h2>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage
