import React from 'react'
import Layout from '../components/Layout';

interface aboutProps {}

const About: React.FC <aboutProps> = () => {
  return (
    <Layout pageTitle='About'>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
      elit. Magnam aliquid consequatur atque at molestias 
      unde, optio reiciendis deserunt sint magni iure? 
      Animi nostrum quod iusto provident hic consequatur 
      rem ea? </p>
    </Layout>
  )
}

export default About