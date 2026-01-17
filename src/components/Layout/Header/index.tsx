import { Container, Nav, NavLink, NavList } from './styles'

export const Header = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <Nav>
        <NavList>
          <li>
            <NavLink onClick={handleScrollToTop} href="#">
              Início
            </NavLink>
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
