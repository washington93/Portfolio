import styled from 'styled-components'

export const Container = styled.div`
  padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  }
`

export const Thumbnail = styled.div`
  margin-right: 8px;
  img {
    width: 132px;
    height: 96px;
    @media (max-width: 375px) {
      width: 99px;
      height: 72px;
    }
  }
`
export const About = styled.div``

export const Title = styled.div`
  font: 16px;
  font-weight: 700;
`

export const Caption = styled.div`
  font: 16px;
  font-weight: 400;
  color: #aaa;
`
