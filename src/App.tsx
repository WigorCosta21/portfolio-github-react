import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'

const App = () => {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
