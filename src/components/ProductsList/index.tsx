import Game from '../../models/Games'
import Product from '../Product'
import { Container, List, Title } from './styles'

//importar no styles (usar no Container e no Card (estilos))
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[] //usar Game na pages/Home para atribuicao de valores das props
}
const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            system={game.system}
            infos={game.infos}
            image={game.image}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList // App.tsx (rotas.element)
