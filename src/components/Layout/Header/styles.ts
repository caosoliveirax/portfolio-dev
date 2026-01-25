import styled, { css } from 'styled-components'
import { flex, mq, NeoStyle } from '../../../styles/mixins'
import * as Base from '../../../styles/base'

export const Container = styled.header`
  ${NeoStyle('2px 2px', '1px', '20px 20px 100px 100px', 'var(--secondary)', 'var(--text)')};
  position: relative;
  margin: 16px auto 0;
  padding: 10px 40px;
  ${flex('row', 'space-between', 'center')}
  max-width: 468px;
  width: 100%;
  height: 70px;
  z-index: 100;

  ${mq.tablet(css`
    width: 80%;
    height: 52px;
    padding: 10px 26px;
  `)}
`

export const Nav = styled.nav`
  width: 100%;
`

export const NavList = styled.ul`
  ${flex('row', 'space-around', 'center')}
`

export const NavLink = styled(Base.Link)`
  color: var(--subtext);
  font-size: clamp(0.75rem, 3vw, 1.1rem);

  &:hover {
    opacity: 0.6;
  }
`
