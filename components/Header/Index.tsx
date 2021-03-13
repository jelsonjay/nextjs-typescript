import React from 'react'
import AppLink from '../AppLink'
import {Container} from '../../styles/Container'
import HeaderElement from '../../styles/HeaderElement'
import {Logo} from '../../styles/TextElement'


interface HeaderProps {}

const Header:React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
    <Container>
    <Logo>
    <AppLink href='/' label='Logo'/>
    </Logo>
 
    <AppLink href='/' label='Home'/>
    <AppLink href='/about' label='About'/>
    <AppLink href='/courses' label='Courses'/>
    <AppLink href='/contact' label='Contact'/>
  
    </Container>
    </HeaderElement>
  )
}

export default Header