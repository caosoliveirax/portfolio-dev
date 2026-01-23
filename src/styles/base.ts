import { css, styled } from 'styled-components'
import { flex, mq, NeoStyle } from './mixins'

export const Section = styled.section`
  ${flex('column', 'center', 'center')};
  min-height: 100vh;
  width: 100%;
  padding: 40px 10%;

  ${mq.tablet(css`
    min-height: auto;
  `)}
`

export const SectionTitle = styled.h2`
  color: var(--text);
  font-weight: 500;
  font-size: clamp(1.75rem, 6vw, 3rem);
  line-height: 1;
  margin-bottom: 32px;
`

export const CardTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 400;
  line-height: 1;
  text-align: center;
`

export const Description = styled.p`
  font-size: clamp(0.95rem, 4vw, 1.25rem);
  color: var(--subtext);
`

export const CardAbout = styled.div`
  ${NeoStyle('6px 6px', '2px', '16px')};
  text-align: start;
  padding: 28px;

  ${mq.mobile(css`
    border-radius: 8px;
    padding: 28px 0;
    border: none;
    text-align: center;
    background-color: transparent;
    box-shadow: initial;
  `)}
`

export const Link = styled.a`
  ${flex('row', 'space-around', 'center')}
  display: block;
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const LinkNeo = styled(Link)`
  ${NeoStyle('4px 4px', '2px', '8px', 'var(--secondary)')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 2px 2px 0 var(--text);
  }
`
