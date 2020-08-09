import React from 'react'

import Book from '../Book'

import { Carousel } from './styles'

import bsojavascript from '../../assets/bsojavascript.jpg'
import bcrieap from '../../assets/bcrieap.png'

const ReadBooks: React.FC = () => (
  <>
    <Carousel>
      <Carousel.Item>
        <Book title="Só JavaScript" author="ola" poster={bsojavascript}>
          Um ótimo livre para quem está iniciando os estudos sobre JavaScript.
          Repleto de exercicios práticos e explicações aprofundadas. Nele eu
          aprendia a criar uma biblioteca JavaScript para controlar elementos da
          DOM.
        </Book>
      </Carousel.Item>
      <Carousel.Item>
        <Book
          title="Crie aplicações com Angular"
          author="ola"
          poster={bcrieap}
        />
      </Carousel.Item>
    </Carousel>
  </>
)

export default ReadBooks
