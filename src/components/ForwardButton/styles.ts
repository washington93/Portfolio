import styled from 'styled-components'
import Bt from 'react-bootstrap/Button'

export const Button = styled(Bt)`
  font: 16px Roboto sans-serif;
  /* background-color: teal;
  border: 0; */

  /* &:hover {
    background-color: tomato;
  }

  &:visited {
    background-color: pink;
  } */
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
