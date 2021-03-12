import React from 'react'
import Layout from '../../components/Layout'
import styles from '../courses/course.module.scss'


 const Index = () => {
  return (
    <Layout pageTitle='Courses'>
    <h1 className={styles.red}>Courses <span>Computer Sience</span></h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
      elit. Doloribus enim voluptas, ex inventore doloremque 
      ullam minus atque dolorum ipsam, delectus quia odit 
      modi aspernatur impedit aliquid consequatur, mollitia 
      neque natus? </p>
    </Layout>
  )
}

export default Index 