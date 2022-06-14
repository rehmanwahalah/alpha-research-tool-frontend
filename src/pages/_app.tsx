import "../../public/css/icomoon.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globals.css'
import "../../public/css/responsive.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
