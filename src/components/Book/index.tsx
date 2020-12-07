import React from 'react'
import Figure from 'react-bootstrap/Figure'

// import img from '../../assets/default_img.svg'
import { Container } from './styles'

interface IBook {
  title: string
  subTitle?: string
  author?: string
  poster?: any
}

const Book: React.FC<IBook> = ({ title, subTitle, poster, children }) => {
  return (
    <Container>
      <Figure>
        <div className="title">
          <h2>{title}</h2>
          {subTitle || ''}
        </div>
        <div>
          <Figure.Image width={171} height={180} alt="171x180" src={poster} />
          <Figure.Caption>{children}</Figure.Caption>
        </div>
      </Figure>
    </Container>
  )
}

export default Book
