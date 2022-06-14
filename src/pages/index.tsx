import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../module/login/Login'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="NFT Alpha Research Tools" />
        <title>Alpha Research Tools</title>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      {/* <Project /> */}
      {/* <Reviews /> */}
      <Login />
      {/* <Forgot /> */}
      {/* <Reset /> */}
    </div>
  )
}

export default Home
