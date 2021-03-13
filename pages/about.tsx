import React from 'react'
import Layout from '../components/Layout';
import {Container} from '../styles/Container'

interface aboutProps {}

const About: React.FC <aboutProps> = () => {
  return (
    <Layout pageTitle='About'>
    <Container>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
      elit. Magnam aliquid consequatur atque at molestias 
      unde, optio reiciendis deserunt sint magni iure? 
      Animi nostrum quod iusto provident hic consequatur 
      rem ea? </p>
    </Container>
    </Layout>
  )
}

export default About