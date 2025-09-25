import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario' // Com o pipe você pode limitar o valor da prop. Poderia ser string, mas a prop receberia qualquer string. Assim é mais seguro
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
