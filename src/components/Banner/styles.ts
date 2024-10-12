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

  color: ${cores.branca};
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; //para o botao ir para a esquerda
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
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
