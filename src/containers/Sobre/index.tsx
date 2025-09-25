import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GituhubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea placeat culpa
      molestias in necessitatibus quos earum quisquam quae excepturi, aliquid
      doloremque quod non ipsa laborum similique temporibus nemo suscipit amet!
    </Paragrafo>
    <GituhubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=BiaFRehder&show_icons=true&theme=radical" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BiaFRehder&hide_progress=true&langs_count=7&theme=dracula&&card_width=100%" />
    </GituhubSecao>
  </section>
)

export default Sobre
