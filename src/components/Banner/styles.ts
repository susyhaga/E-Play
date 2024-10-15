import { styled } from 'styled-components'
import { cores } from '../../global'
import { TagContainer } from '../Tag/styles'

//div principal
export const Image = styled.div`
  display: block;
  height: 590px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  color: ${cores.branca};
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; //para o botao ir para a esquerda
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  //overlay dos precos
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Titulo = styled.h2`
  width: 450px;
  height: 84px;
  font-size: 36px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
