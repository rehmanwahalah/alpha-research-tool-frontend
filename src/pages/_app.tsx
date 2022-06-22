import { SessionProvider } from "next-auth/react"
import "../../public/css/icomoon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import "../../public/css/responsive.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}