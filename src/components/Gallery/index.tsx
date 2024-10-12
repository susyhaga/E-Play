import Section from '../Section'
import { Action, Item, ItemsList, Modal, ModalContent } from './styles'

import spider from '../../assets/banner-homem-aranha.png'
import hogwarts from '../../assets/fundo_hogwarts.png'
import play from '../../assets/play.png'
import zoom from '../../assets/zoom.png'
import close from '../../assets/close.png'
import { useState } from 'react'

//heranca
interface GalleryItem {
  type: 'image' | 'video'
  url: string
}
//codigo mockado (codigo hardcode) usao paenas para preencher o espaco vazio
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spider
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ'
  }
]

type Props = {
  defaultCover: string
  name: string
}

//modal herda de GalleryItem  usado no usestate modal
interface ModalState extends GalleryItem {
  isVisible: boolean
}
//criando imagem de exibicao do video
const Gallery = ({ defaultCover, name }: Props) => {
  //modal
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title={'Galeria'} background={'black'}>
        <ItemsList>
          {mock.map((media, index) => (
            //setMODALS
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </ItemsList>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header className="header">
            <h4>{name}</h4>
            <img
              src={close}
              alt="ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            //video youtube
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
