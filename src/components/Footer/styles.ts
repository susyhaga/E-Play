import styled from 'styled-components'
import { cores } from '../../global'

export const Container = styled.footer`
  display: block;
  background-color: ${cores.cinza};
  text-decoration: none;
  color: ${cores.branca};
  padding: 36px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const LinksUl = styled.ul`
  display: flex;
  margin-top: 16px;
`
export const Link = styled.li`
  color: ${cores.cinzaClaro};
  align-items: start;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
