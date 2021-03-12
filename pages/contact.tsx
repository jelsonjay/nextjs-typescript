import React from 'react'
import Layout from '../components/Layout'

interface contactProps {}


 const contact: React.FC <contactProps> = () => {
  return (
    <Layout pageTitle='Contact'>
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
      elit. Molestiae harum laboriosam architecto at sed 
      labore, ullam unde libero aliquid suscipit aperiam 
      dolores veniam sunt ipsa ipsum deleniti consequuntur 
      assumenda dolor?</p>
    </Layout>
  )
}

export default contact