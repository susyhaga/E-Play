import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCard } from './styles'
import logo from '../../assets/logo.svg'
import carrinhoIcon from '../../assets/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="logo EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories"> Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#"> Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCard href="#">
      0 - produtos
      <img src={carrinhoIcon} alt="Carrinho de compras" />
    </LinkCard>
  </HeaderBar>
)

export default Header // App.tsx
