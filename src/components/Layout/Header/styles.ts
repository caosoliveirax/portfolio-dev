import { css, styled } from 'styled-components'
import { flex, mq } from '../../../styles/mixins'

export const Container = styled.header`
  position: relative;
  margin: 16px auto 0;
  padding: 10px 40px;
  ${flex('row', 'space-between', 'center')}
  max-width: 468px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #000000;
  border-radius: 20px 20px 100px 100px;
  z-index: 100;

  ${mq.tablet(css`
    width: 80%;
    height: 52px;
    margin: 20px auto 0;
    padding: 10px 26px;
  `)}
`

export const Nav = styled.nav`
  width: 100%;
`

export const NavList = styled.ul`
  ${flex('row', 'space-around', 'center')}
`

export const NavLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.subtext};
  font-size: clamp(0.75rem, 3vw, 1rem);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`
