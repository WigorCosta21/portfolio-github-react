import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import { Paragraph } from './../../components/Paragraph/styles'
import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={1.25}> Wigor Ribeiro </Title>
      <Paragraph type="secondary" fontSize={1}>
        WigorCosta21
      </Paragraph>
      <Description type="main" fontSize={0.75}>
        Desenvolvedor Front-End
      </Description>
      <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
