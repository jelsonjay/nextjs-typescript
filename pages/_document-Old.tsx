import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {

    return (
      <Html>
        <Head />
        <meta property='test' content='me' />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument