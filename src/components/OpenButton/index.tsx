import React, { HTMLAttributes } from 'react'
import Bt from 'react-bootstrap/Button'

import { Button } from './styles'

interface IFowardButton extends HTMLAttributes<Bt> {
  name?: string
  linkName?: string
  url?: string
  variant?: string
}

const FowardButton: React.FC<IFowardButton> = ({
  name = '###',
  children,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {children}
      {name}
    </Button>
  )
}

export default FowardButton
