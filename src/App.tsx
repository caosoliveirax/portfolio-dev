import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { theme } from './styles/theme'
import { Hero } from '@components/Sections/Hero'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Hero />
      </ThemeProvider>
    </>
  )
}

export default App
