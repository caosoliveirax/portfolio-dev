import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { theme } from './styles/theme'
import { Hero } from '@components/Sections/Hero'
import Header from '@components/Layout/Header'
import About from '@components/Sections/About'
import Projects from '@components/Sections/Projects'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <About />
        <Projects />
      </ThemeProvider>
    </>
  )
}

export default App
