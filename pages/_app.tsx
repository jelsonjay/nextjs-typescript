import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/Globals';
import {AppProps} from 'next/app'


interface MyAppProps extends AppProps {}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  <GlobalStyle />
  </ThemeProvider>
  )
}

export default MyApp
