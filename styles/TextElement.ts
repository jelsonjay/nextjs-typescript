import styled from 'styled-components'

export const Logo = styled.h1`
font-weight: bold;
font-size: 1.5rem;
`
export const Title = styled.h1<{hero?: boolean}>`
color: ${({theme, hero}) => (hero ? theme.secondary : theme.dark)};
font-size: ${({hero}) => (hero ? '3.5rem' : '2rem')};
line-height: ${({hero}) => (hero ? 1 : 1.6)};
margin-bottom: ${({hero}) => (hero ? '8px' : '24px')}
`

export const Paragraph = styled.p<{light?: boolean}>`
color: ${({theme, light}) => light ? theme.mainWhite : theme.mainDark};
font-size: 1.1.rem;
margin-bottom: 1.5rem;
`

