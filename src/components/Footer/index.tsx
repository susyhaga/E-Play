import { Container, SectionTitle, LinksUl, Link, FooterSection } from './styles'

//para criar o ano atual de acordo com a data
const currentyYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <LinksUl>
            <Link>RPG</Link>
            <Link>Ação</Link>
            <Link>Aventura</Link>
            <Link>Eporte</Link>
            <Link>imulação</Link>
            <Link>Etratégia</Link>
            <Link>Promoçõe</Link>
          </LinksUl>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <LinksUl>
            <Link>Novidades</Link>
            <Link>Promoções</Link>
            <Link> Em breve</Link>
          </LinksUl>
        </FooterSection>
        <p>{currentyYear}- &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </div>
  </Container>
)

export default Footer //App.tsx
