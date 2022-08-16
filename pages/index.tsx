import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cory Hank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />

    </>
  )
}

export default Home