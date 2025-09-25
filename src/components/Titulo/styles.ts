import styled from 'styled-components'

import { Props } from '.' // Nesse caso, como o nome do arquivo é index, é só chamar o .
// Para definir outro tipo de font-size do titulo, é necessário ter as props para puxar na hr de colocar o elemento, contudo fica melhor se exportarmos e importarmos as props e usá-las em outros components
// type Props = {
//   children: string
//   fontSize: number
// }

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
