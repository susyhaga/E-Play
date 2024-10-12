import styled from 'styled-components'
import { cores } from '../../global'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 16px;

  //reutilizando e modificando o estilo TagContainer do component Tag

  ${TagContainer} {
    margin-right: 8px;
  }
  //overlay
  &::after {
    position: absolute;
    background-color: ${cores.preta};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  //posicao dos eleemntos do Hero
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const HeroInfos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`
