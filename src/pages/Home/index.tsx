import React from 'react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileAlt,
  FaFlask,
  FaRegComment,
  FaHammer,
} from 'react-icons/fa'
import { GoBook } from 'react-icons/go'

import perfil from '../../assets/foto_perfil.png'
import ReadBooks from '../../components/ReadBooks'
import MyStacks from '../../components/MyStacks'
import ForwardButton from '../../components/ForwardButton'
import ModalButton from '../../components/ModalButton'
import OpenButton from '../../components/OpenButton'
import MyProjects from '../../components/MyProjects'

import { Container, Content, Header, Title } from './styles'

const Home: React.FC = () => {
  const buttonsStyle = 'light'

  return (
    <Container>
      <Content>
        <div className="content">
          <Header>
            <Title>
              <h1>Washington da Silva Ribeiro</h1>
              <h2>Desenvolvedor FullStack</h2>
            </Title>
            <img src={perfil} alt="" />
          </Header>
          <img
            className="git-status"
            src="https://github-readme-stats.vercel.app/api?username=washington93&count_private=true&theme=graywhite"
            alt="washington93 github status"
          />
        </div>
        <ul>
          <li>
            <ForwardButton
              variant={buttonsStyle}
              name="Github"
              url="https://github.com/washington93"
              linkName="Github"
            >
              <FaGithub />
            </ForwardButton>
          </li>
          <li>
            <ForwardButton
              variant={buttonsStyle}
              name="Instagram"
              url="https://www.instagram.com/washingtonsr2016/"
              linkName="Instagram"
            >
              <FaInstagram />
            </ForwardButton>
          </li>
          <li>
            <ForwardButton
              variant={buttonsStyle}
              name="Linkedin"
              url="https://www.linkedin.com/in/washingtonsr93/"
              linkName="Linkedin"
            >
              <FaLinkedin />
            </ForwardButton>
          </li>
          <li>
            <OpenButton
              // href={process.env.PUBLIC_URL + '/cv.pdf'}
              // download="cv_washingtonsr"
              name="cv"
              title="cv"
              onClick={() => {
                window.open(
                  'https://drive.google.com/file/d/1pDNUbM8T3R4sKVvaS9jhKVbb2V1zllpz/view?usp=sharing',
                )
              }}
              variant={buttonsStyle}
            >
              <FaFileAlt />
            </OpenButton>
          </li>
          <li>
            <ModalButton
              name="Livros Lidos"
              title="Livros que já li"
              icon={<GoBook />}
              variant={buttonsStyle}
            >
              <ReadBooks />
            </ModalButton>
          </li>
          <li>
            <ModalButton
              name="Contato"
              title="Contato"
              variant={buttonsStyle}
              icon={<FaRegComment />}
            >
              <p>
                <strong>E-mail:</strong> washington.s@escolar.ifrn.edu.br
              </p>
            </ModalButton>
          </li>
          <li>
            <ModalButton
              name="Stacks"
              icon={<FaHammer />}
              title="Minhas Stacks"
              variant={buttonsStyle}
            >
              <MyStacks />
            </ModalButton>
          </li>
          <li>
            <ModalButton
              name="Meus Apps"
              icon={<FaFlask />}
              title="Meus Apps"
              variant={buttonsStyle}
            >
              <MyProjects />
            </ModalButton>
          </li>
        </ul>
      </Content>
    </Container>
  )
}

export default Home
