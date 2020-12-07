import styled from 'styled-components'
import Bt from 'react-bootstrap/Button'
import _Modal from 'react-bootstrap/Modal'

export const Modal = styled(_Modal)`
  .modal-dialog {
    max-width: 90%;
    .modal-content .modal-body {
      background-color: red;
    }
  }
`

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
`
