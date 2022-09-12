import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning NextJS - Home</title>
      </Head>

      <h1>Learning NextJS :)</h1>
      <Link href='/about' >Ir a About</Link>
    </div>
  )
}
