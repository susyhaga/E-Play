import { Img, Titulo, Precos } from './styles'
import bannerImg from '../../assets/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Img
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
  >
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,9
        </Precos>
      </div>
      <Button
        type="link"
        to="./produto"
        title="Clique aqui para aproveitar essa oferta!"
      >
        Aproveitar
      </Button>
    </div>
  </Img>
)

export default Banner
