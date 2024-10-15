import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import { Banner, HeroInfos } from './styles'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <HeroInfos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span> De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            varcolors="primary"
            type={'button'}
            title={'Clique aqui para adicionar este jogo ao carrinho'}
          >
            Adicionar ao carrinho
          </Button>
        )}
      </HeroInfos>
    </div>
  </Banner>
)
export default Hero //    pages/Product
