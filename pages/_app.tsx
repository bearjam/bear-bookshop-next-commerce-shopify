import { CommerceProvider } from '@framework'
import type { AppProps } from 'next/app'
import { FC, useEffect } from 'react'
import tw from 'twin.macro'
import { Footer, Header } from '~/components'
import { CartProvider } from '~/shopify/storefront/cart'
import './_app.css'
const Noop: FC = ({ children }) => <>{children}</>

const Main = tw.div`pt-20`

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  return (
    <CartProvider>
      {/* <Head /> */}
      <Header />
      <Main>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Main>
      <Footer />
    </CartProvider>
  )
}

export default App
