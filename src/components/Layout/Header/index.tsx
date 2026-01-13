import { Container, Nav, NavLink, NavList } from './styles'

export const Header = () => {
  return (
    <Container>
      <Nav>
        <NavList>
          <li>
            <NavLink href="#home">Início</NavLink>
          </li>
          <li>
            <NavLink href="#about">Sobre</NavLink>
          </li>
          <li>
            <NavLink href="#projects">Projetos</NavLink>
          </li>
          <li>
            <NavLink href="#contact">Contato</NavLink>
          </li>
        </NavList>
      </Nav>
    </Container>
  )
}

export default Header
