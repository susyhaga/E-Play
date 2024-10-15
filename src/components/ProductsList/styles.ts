import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../global'
import { Card } from '../Product/styles'

//background diferentes para os Cards
export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 16px;
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 51px;
  font-weight: bold;
  line-height: 18.75px;
  text-align: left;
`
