import styled from 'styled-components'

export const Container = styled.div`
  figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: max-content;
    width: auto;
    position: relative;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 85%;
      padding-left: 8px;
      padding-right: 8px;
      height: 84px;
      text-align: center;
      > h2 {
        font-size: 18px;
        text-align: center;
      }
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
