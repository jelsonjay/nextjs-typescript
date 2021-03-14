import {NextPage, GetStaticPaths, GetStaticProps} from 'next'
import Layout from "../../components/Layout"
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import { Container } from '../../styles/Container';
import { Title } from '../../styles/TextElement'

interface BlogPostProps {
content: string
excerpt: string
frontmatter:{
title:string
author:string

}
}

const BlogPost: NextPage<BlogPostProps> = ({frontmatter, content, excerpt}) => {
return(
  <Layout pageTitle={frontmatter.title} description={excerpt}>
  {/* {JSON.stringify(frontmatter, null, 2)} */}
  <Container>
  <Title>{frontmatter.title}</Title>
  <h3>By: {frontmatter.author} </h3>
  <ReactMarkdown source={content} />
  </Container>
  </Layout>
)
}
// getstaticpaths
export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('./_posts')
  const paths = files.map((fname) => ({
  params:{
  slug: fname.replace('.md', '')
  }
  }))
  return{
  paths,
  fallback: false,
  }
}

export const getStaticProps: GetStaticProps <BlogPostProps> = async({params}) => {
 const slug = params?.slug
 const md = fs.readFileSync(path.join('./_posts', `${slug}.md`)).toString()
 const {data, content, excerpt} = matter(md)

 return{
  props:{
  frontmatter:{
  title: data.title,
  author: data.author,

  },
  excerpt,
  content,
  }
 }
}


export default BlogPost