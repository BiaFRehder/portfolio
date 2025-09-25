import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario' // Com o pipe você pode limitar o valor da prop. Poderia ser string, mas a prop receberia qualquer string. Assim é mais seguro
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
