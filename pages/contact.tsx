import React from 'react'
import Layout from '../components/Layout'
import {Container} from '../styles/Container'

interface contactProps {}


 const contact: React.FC <contactProps> = () => {
  return (
    <Layout pageTitle='Contact'>
    <Container>
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit. Molestiae harum laboriosam architecto at sed 
      labore, ullam unde libero aliquid suscipit aperiam 
      dolores veniam sunt ipsa ipsum deleniti consequuntur 
      assumenda dolor?</p>
    </Container>
    </Layout>
  )
}

export default contact