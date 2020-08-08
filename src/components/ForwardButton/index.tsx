import React, { useState, HTMLAttributes } from 'react'
import Bt from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { Button } from './styles'

interface IFowardButton extends HTMLAttributes<Bt> {
  name?: string
  linkName?: string
  url?: string
  variant?: string
}

const FowardButton: React.FC<IFowardButton> = ({
  name = '###',
  linkName = '',
  url = '#',
  children,
  ...rest
}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleConfirm = () => {
    window.open(url)
    handleClose()
  }

  return (
    <>
      <Button onClick={handleShow} {...rest}>
        {children}
        {name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{`Deseja abrir uma nova aba para o ${linkName}?`}</Modal.Body>
        <Modal.Footer>
          <Button {...rest} onClick={handleClose}>
            Cancelar
          </Button>
          <Button {...rest} onClick={handleConfirm}>
            Abrir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FowardButton
