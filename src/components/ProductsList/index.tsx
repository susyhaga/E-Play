import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, List, Title } from './styles'

//importar no styles (usar no Container e no Card (estilos))
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[] //usar Game na pages/Home para atribuicao de valores das props
}

//formatacao dos precos .... exportar para o  Banner
export const formataPreco = (preco = 0) => {
  // criando instancia de internacionalizacao com Intl
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ title, background, games }: Props) => {
  const getGamesTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices) {
      if (game.prices.discount) {
        tags.push(`${game.prices.discount}%`)
      }
      if (game.prices.current) {
        tags.push(formataPreco(game.prices.current))
      }
    }

    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGamesTags(game)}
                system={game.details.system}
                title={game.name}
                id={game.id}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList // App.tsx (rotas.element)
