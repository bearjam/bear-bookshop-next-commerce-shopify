import type { AppProps } from 'next/app'
import { FC, Fragment, useEffect } from 'react'
import './_app.css'
import tw from 'twin.macro'
import { Header, Footer } from '~/components'
import { CommerceProvider } from '@framework'
const Noop: FC = ({ children }) => <>{children}</>

const Main = tw.div`pt-20`

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  return (
    <CommerceProvider>
      {/* <Head /> */}
      <Header />
      <Main>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Main>
      <Footer />
    </CommerceProvider>
  )
}

export default App
