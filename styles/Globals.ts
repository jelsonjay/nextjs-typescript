import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme';

interface Props {
theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
boby{
font-size: calc(16px + .5vw);
font-family: 'Fira Sans', 'Lato', sans-serif;
line-height: 1.7;
background: ${({theme}) => theme.mainWhite};
color: ${({theme}) => theme.mainMedium}
}
a{
text-decoration: none;
color: ${({theme}) => theme.mainBlue}
}
ul{
list-style: none;
}

`

export default GlobalStyle