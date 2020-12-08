import { createGlobalStyle } from 'styled-components'
import bg from '../assets/bg.png'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  border-style,button{
    font: 16px Roboto sans-serif
  }
  button{
    cursor:pointer
  }
`
