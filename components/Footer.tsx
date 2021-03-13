import React from 'react'
import FooterElement from '../styles/FooterElement'
interface FooterProps {}

 const Footer: React.FC <FooterProps> = () => {
  return (
    <FooterElement>
    <p>&copy; Jelson J {new Date().getFullYear()}</p>
    </FooterElement>
  )
}


export default Footer