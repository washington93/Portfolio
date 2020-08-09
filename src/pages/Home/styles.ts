import styled from 'styled-components'
import Bt from 'react-bootstrap/Button'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  min-height: 70vh;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (max-width: 570px) {
    flex-direction: column;
  }

  @media (max-width: 820px) {
    width: 100vw;
    height: 100vh;
  }

  ul {
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    @media (max-width: 570px) {
      max-width: 100%;
      max-height: 100%;
    }
    li {
      padding: 4px;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 8px;
        }
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`

export const Header = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px 0 0 24px;
  padding: 8px;

  @media (max-width: 570px) {
    border-radius: 0 0 24px 24px;
    flex-direction: row;
  }

  @media (max-width: 820px) {
    height: 100vh;
  }
  h1 {
    padding: 8px;
    font-size: 24px;
    font-weight: 500;
  }

  h2 {
    margin-top: -4px;
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
  }

  img {
    margin-top: 24px;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
