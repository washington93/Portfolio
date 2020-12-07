import styled from 'styled-components'
import Ca from 'react-bootstrap/Carousel'

export const Carousel = styled(Ca)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .carousel-indicators {
    visibility: hidden;
  }

  .carousel-control-prev,
  .carousel-control-next {
    height: 84px;
    width: 50px;
    outline: $color-white;
    background-size: 100%, 100%;
    border-radius: 50%;
    border: none;
    background-color: none;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23009be1' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23009be1' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
`
