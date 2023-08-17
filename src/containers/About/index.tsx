import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { SectionGithub } from './styles'

const About = () => (
  <section>
    <Title fontSize={1}>Sobre mim</Title>
    <Paragraph type="secondary">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      culpa beatae iste nesciunt fuga eius magni minus adipisci numquam, animi
      impedit, facere pariatur repellat possimus alias expedita odio dolore id.
    </Paragraph>
    <SectionGithub>
      <img src="https://github-readme-stats.vercel.app/api?username=WigorCosta21&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=WigorCosta21&layout=compact&langs_count=7&theme=dracula" />
    </SectionGithub>
  </section>
)

export default About
