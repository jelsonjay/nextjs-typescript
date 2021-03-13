import React from 'react'
import {HeroContainer} from '../../styles/Container'
import {Title, Paragraph} from '../../styles/TextElement'
import ButtonElement from '../../styles/ButtonElement'

interface HeroProps {

}

 const Index: React.FC<HeroProps> = () => {
  return (
    <>
    <HeroContainer>
    <Title hero>Nextjs TypeScript Blog</Title>
    <Paragraph light>Create a blog with Nesxtjs & TypeScript </Paragraph>
    <ButtonElement>Subscribe</ButtonElement>
    </HeroContainer>
    </>
  )
}

export default Index