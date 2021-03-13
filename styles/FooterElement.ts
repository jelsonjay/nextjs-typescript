import styled from 'styled-components'

const FooterElement = styled.footer`
height:100px;
background: ${({theme}) => theme.mainDark};
display: flex;
justify-content:center;
align-items:center;
color: ${({theme}) => theme.mainWhite};
font-size: 1.30rem;
`

export default FooterElement