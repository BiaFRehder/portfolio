import { Titulo as TituloEstilo } from './styles'
// Como o componente Titulo já existe, dê um apelido, como TituloEstilo

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)
// Uma propriedade não pode ser inserida dentro da tag do componente, para isso use o children, não o valor em si

export default Titulo
