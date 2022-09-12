import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Learning NextJS</title>
      <meta name="description" content="Creating an app for learning NextJS" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>News-App</header>
    <Component {...pageProps} />
  </>
}

export default MyApp
