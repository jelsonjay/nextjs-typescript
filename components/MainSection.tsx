import React from 'react'
import PostListing from './PostListing'
import PostPreview from '../types/PostPreview'
import { Container } from '../styles/Container';
import { Title } from '../styles/TextElement';


interface MainSectionProps {
posts: PostPreview[]
}

const MainSection: React.FC<MainSectionProps> = ({posts}) => {
  return (
    <main>
   <Container>
    <Title>All Posts </Title>
    <PostListing posts={posts} />
   </Container>
    </main>
  )
}

export default MainSection