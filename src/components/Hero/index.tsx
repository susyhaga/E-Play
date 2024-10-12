import bannerImg from '../../assets/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, HeroInfos } from './styles'
const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <HeroInfos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 290,90 </span>
          De R$ 290,90 <br />
          Por R$ 190,90
        </p>
        <Button
          varcolors="primary"
          type={'button'}
          title={'Clique aqui para adicionar este jogo ao carrinho'}
        >
          Adicionar ao carrinho
        </Button>
      </HeroInfos>
    </div>
  </Banner>
)
export default Hero //    pages/Product
