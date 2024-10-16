import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void //recebe uma funcao sem argumento
  children: string //texto do botao
  varcolors?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  onClick,
  to,
  children,
  varcolors = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        varcolors={varcolors}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} onClick={onClick}>
      Aproveitar
    </ButtonLink>
  )
}
export default Button //Exportar para: Banner,
