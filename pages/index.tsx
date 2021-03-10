import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

   <h1 className={styles.red}>Hello<span>World!</span></h1>


    </div>
  )
}
