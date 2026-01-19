import { styled } from 'styled-components'

export const Container = styled.header`
  position: relative;
  margin: 16px auto 0;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 468px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #000000;
  border-radius: 20px 20px 100px 100px;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 80%;
    height: 52px;
    margin: 20px auto 0;
    padding: 10px 26px;
  }
`

export const Nav = styled.nav`
  width: 100%;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const NavLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 1rem;

  transition: opacity 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }

  &:hover {
    opacity: 0.6;
  }
`
