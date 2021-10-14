import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches.config'

class MyDocument extends Document {
  render() {
    const styles = getCssText()

    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link
            href={
              'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
            }
            rel="stylesheet"
          />
          <style dangerouslySetInnerHTML={{ __html: styles }} />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
