import { styled } from 'styled-components'
import { cores } from '../../global'

export const ItemsList = styled.ul`
  display: flex;
`
// div das actions zoom e play icons
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.73);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`
export const Item = styled.li`
  margin-right: 16px;
  position: relative;
  // '>' significa q apenas o filho direto  (no caso img) do container Item  tera esse estilo
  > img {
    border-radius: 8px;
    border: 2px solid ${cores.branca};
    height: 150px;
    width: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  //modal invisivel
  display: none;
  align-items: center;
  justify-content: center;

  //modal visivel
  &.visivel {
    display: flex;
  }

  //className overlay
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.73);
    width: 100%;
    height: 100%;
  }

  img {
    width: 960px;
    height: 540px;
    object-fit: cover;
  }
`

//className container
export const ModalContent = styled.div`
  max-width: 960px;
  max-height: 90vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: ${cores.branca};
    }
  }

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }

  iframe {
    display: block;
    border: none;
    width: 100%;
    height: 480px;
  }
`
