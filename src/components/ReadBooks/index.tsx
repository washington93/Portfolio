import React from 'react'

import Book from '../Book'

import { Carousel } from './styles'

import bsojavascript from '../../assets/bsojavascript.jpg'
import bcrieap from '../../assets/bcrieap.png'
import balimpa from '../../assets/balimpa.png'
import baran from '../../assets/baran.png'
import bgandroid from '../../assets/bgandroid.png'

const ReadBooks: React.FC = () => (
  <>
    <Carousel>
      <Carousel.Item>
        <Book title="Só JavaScript" author="ola" poster={bsojavascript}>
          Um ótimo livre para quem está iniciando os estudos sobre JavaScript.
          Repleto de exercicios práticos e explicações aprofundadas.
        </Book>
      </Carousel.Item>
      <Carousel.Item>
        <Book title="Crie aplicações com Angular" author="ola" poster={bcrieap}>
          Nesse livro aprendi os conceitos basicos de Angula 2. Como
          configuração do ambiente, clis e arquitetura do sistema.
        </Book>
      </Carousel.Item>
      <Carousel.Item>
        <Book
          title="Arquitetura Limpa"
          subTitle="O guia do Artesão para Estrutura e Design do Software"
          author="ola"
          poster={balimpa}
        >
          Esse livro me deu base teorica para compreeder principios como: SOLID,
          Injeção de dependência, Regras de negócio, entre outros.
        </Book>
      </Carousel.Item>
      <Carousel.Item>
        <Book
          title="Projetos com Arduino e Android"
          author="ola"
          poster={baran}
        >
          Embora simples os exemplos desse livro são bem divertidos.
        </Book>
      </Carousel.Item>
      <Carousel.Item>
        <Book
          title="Google Android"
          subTitle="3ª Edição"
          author="ola"
          poster={bgandroid}
        >
          Me deu uma base boa a respeito da estrutura de um projeto Android
          nativo. Atualmente só programo mobile com RN porémo conhecimento deste
          livro ainda me ajuda muito.
        </Book>
      </Carousel.Item>
    </Carousel>
  </>
)

export default ReadBooks
