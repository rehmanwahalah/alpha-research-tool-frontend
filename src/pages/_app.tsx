import { SessionProvider } from "next-auth/react";
import "../../public/css/icomoon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globals.css";
import "../../public/css/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../store";
import { ToastContainer } from "react-toastify";

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const store: any = useStore();

  return (
    <>
    <ToastContainer theme="dark" />
    <PersistGate persistor={store.__persistor}>
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={pageProps.session}
      >
        <Component {...pageProps} />
      </SessionProvider>
    </PersistGate>
    </>
  );
}
export default wrapper.withRedux(App);
