import styled from 'styled-components'

const BottonElement = styled.button`
border: none;
background: ${({theme}) => theme.secondary};
padding: 10px 20px;
border-radius: 5px;
text-transform: capitalize;
cursor: pointer;
color: ${({theme}) => theme.mainOrange};
font-weight: bold;

&:hover{
opacity: 0.8;
}

`
export default BottonElement
