import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle='HomePage'>
   <h1 className={styles.red}>Hello<span>World!</span></h1>
    </Layout>
  )
}
