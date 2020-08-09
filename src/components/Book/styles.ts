import styled from 'styled-components'

export const Container = styled.div`
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 271;
    width: auto;
    > h2 {
      height: 128px;
      text-align: center;
    }
    > div {
      display: flex;
      align-items: center;
    }
    figcaption {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
    }
  }
`

export const Content = styled.div``
