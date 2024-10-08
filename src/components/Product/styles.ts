import { styled } from 'styled-components'
import { cores } from '../../global'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.preta};
  border-radius: 8px;
  padding: 8px;

  //uso e customização do componente estilizado Tag
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute; //div Card (principal) com position relative
  top: 16px;
  right: 16px;
`
