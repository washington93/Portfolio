import React from 'react'

import { Container, Thumbnail, About, Title, Caption } from './styles'

import img from '../../assets/thumbnails/riot-api.jpg'
import imgDefault from '../../assets/default.jpg'

const Project: React.FC = () => {
  return (
    <>
      <Container>
        <Thumbnail>
          <img src={img} />
        </Thumbnail>
        <About>
          <Title>Consumindo Api do League of Legends</Title>
          <Caption>TypeScript, ReactJs, Redux Toolkit</Caption>
        </About>
      </Container>
      <Container>
        <Thumbnail>
          <img src={imgDefault} />
        </Thumbnail>
        <About>
          <Title>Jogo da Memória do Mortal Kombate</Title>
          <Caption>Java, Android</Caption>
        </About>
      </Container>
      <Container>
        <Thumbnail>
          <img src={imgDefault} />
        </Thumbnail>
        <About>
          <Title>Consumindo Api do Github</Title>
          <Caption>TypeScript, ReactJs, Polished, Styled-components</Caption>
        </About>
      </Container>
      <Container>
        <Thumbnail>
          <img src={imgDefault} />
        </Thumbnail>
        <About>
          <Title>Backend Bootcamp da Rocketseat</Title>
          <Caption>
            TypeScript, Node.js, express, bcryptjs, celebrate, mongolDB,
            typeorm, jest, cors
          </Caption>
        </About>
      </Container>
      <Container>
        <Thumbnail>
          <img src={imgDefault} />
        </Thumbnail>
        <About>
          <Title>Semana OmniStack da Rocketseat</Title>
          <Caption>
            JavaScript, React, ReactJS, Node.js, express, knexjs, cors, axios
          </Caption>
        </About>
      </Container>
      <Container>
        <Thumbnail>
          <img src={imgDefault} />
        </Thumbnail>
        <About>
          <Title>Twitter clone</Title>
          <Caption>HTML, CSS</Caption>
        </About>
      </Container>
    </>
  )
}

export default Project
