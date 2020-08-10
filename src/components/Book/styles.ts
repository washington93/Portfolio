import styled from 'styled-components'

export const Container = styled.div`
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
    > h2 {
      display: flex;
      align-items: center;
      height: 64px;
      font-size: 18px;
      text-align: center;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div figcaption {
      height: 250px;
      flex: 1;
      text-align: justify;
    }

    figcaption {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
  }
`

export const Content = styled.div``
