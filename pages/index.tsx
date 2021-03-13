import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout';
import PostPreview from '../types/PostPreview'
import { NextPage, GetStaticProps } from 'next';
import fs from 'fs'
import matter from 'gray-matter'
import PostListing from '../components/PostListing'
import Hero from '../components/Hero'


interface BlogProps{
posts: PostPreview[]
}

 const Home: NextPage<BlogProps> = ({posts}) => {
  return (
    <Layout pageTitle='HomePage'>
   <Hero>
    <h1 className={styles.red}>Hello<span>World!</span></h1>
    <PostListing posts={posts} />
   </Hero>
  </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync('./_posts')
  const posts = files.map((fname) => {
  const md = fs.readFileSync(`./_posts/${fname}`).toString()
  const {data, excerpt} = matter(md, {excerpt_separator: '\n\n'})
  return{
  slug: fname.replace('.md', ''),
  title: data.title,
  excerpt,
  }
  })

  return{
  props:{
  posts,
  },
  }
}

export default Home