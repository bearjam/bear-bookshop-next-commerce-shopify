import type { AppProps } from 'next/app'
import { FC, Fragment, useEffect } from 'react'
import tw from 'twin.macro'

const Noop: FC = ({ children }) => <>{children}</>

const Main = tw.div`pt-20`

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  return (
    <Fragment>
      {/* <Head />
      <Header /> */}
      <Main>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Main>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default App
