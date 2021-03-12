import React from 'react'
import Layout from '../components/Layout';

interface aboutProps {}

const About: React.FC <aboutProps> = () => {
  return (
    <Layout pageTitle='About'>
    <h1>About Page</h1>
    </Layout>
  )
}

export default About