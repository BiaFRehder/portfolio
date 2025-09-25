import Titulo from '../../components/Titulo'

const Sidebar = () => (
  <aside>
    <img src="https://github.com/BiaFRehder.png" />
    <Titulo fontSize={20}>Bia Fucuda Rehder</Titulo>
    {/* Depois de definir o children, a propriedade consegue receber coisas, nesse caso, uma string */}
  </aside>
)

export default Sidebar
