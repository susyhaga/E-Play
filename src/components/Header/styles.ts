import styled from 'styled-components'
import { cores } from '../../global'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  color: ${cores.branca};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCard = styled.a`
  display: flex;
  img {
    margin-left: 16px;
  }
`
