import React from 'react'
import Figure from 'react-bootstrap/Figure'

// import img from '../../assets/default_img.svg'
import { Container } from './styles'

interface IBook {
  title: string
  author?: string
  poster?: any
}

const Book: React.FC<IBook> = ({
  title,
  author = '',
  poster,
  children,
  ...rest
}) => {
  const a = 1
  return (
    <Container>
      <Figure>
        <h2>{title}</h2>
        <div>
          <Figure.Image width={171} height={180} alt="171x180" src={poster} />
          <Figure.Caption>{children}</Figure.Caption>
        </div>
      </Figure>
    </Container>
  )
}

export default Book
