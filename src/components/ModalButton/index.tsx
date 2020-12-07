import React, { useState, HTMLAttributes } from 'react'
import Bt from 'react-bootstrap/Button'

import { Button, Modal } from './styles'

interface IFowardButton extends HTMLAttributes<Bt> {
  name?: string
  title?: string
  url?: string
  icon?: any
  variant?: string
}

const FowardButton: React.FC<IFowardButton> = ({
  name = '###',
  title,
  children,
  icon,
  ...rest
}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button {...rest} onClick={handleShow}>
        {icon}
        {name}
      </Button>
      <Modal show={show} onHide={handleClose} scrollable={false}>
        {title ? (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        ) : (
          ''
        )}

        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button {...rest} onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FowardButton
