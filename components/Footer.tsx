import React from 'react'

interface FooterProps {}

 const Footer: React.FC <FooterProps> = () => {
  return (
    <div style={{textAlign: 'center'}}>
    <h1>&copy; My Footer {new Date().getFullYear()}</h1>
    </div>
  )
}


export default Footer