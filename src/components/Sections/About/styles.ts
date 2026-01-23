import styled, { css } from 'styled-components'
import { flex, mq, NeoStyle } from '../../../styles/mixins'

export const AboutContainer = styled.section`
  ${flex('column', 'center', 'center')};
  min-height: 100vh;
  padding: 80px 10%;

  ${mq.tablet(css`
    padding: 0 20px;
  `)}
`

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  text-align: start;
  line-height: 1;
  margin-bottom: 12px;

  ${mq.tablet(css`
    text-align: center;
  `)}
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  line-height: 1;
  margin-bottom: 28px;

  ${mq.tablet(css`
    margin-bottom: 20px;
  `)}
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-areas:
    'bio tech'
    'bio soft';
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto;
  gap: 20px;

  ${mq.desktop(css`
    grid-template-areas:
      'bio'
      'tech'
      'soft';
    grid-template-columns: auto;
    margin-bottom: 16px;
  `)}
`

export const CardBase = styled.div`
  ${NeoStyle('6px 6px', '2px', '16px')};
  text-align: start;
  padding: 28px;

  ${mq.mobile(css`
    border-radius: 8px;
    padding: 28px 0px;
    border: none;
    text-align: center;
    background-color: transparent;
    box-shadow: initial;
  `)}
`

export const BioCard = styled(CardBase)`
  grid-row: span 2;
  grid-area: bio;
`

export const Text = styled.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 200;
  color: var(--subtext);
  line-height: 2.1;
  max-width: 400px;

  ${mq.desktop(css`
    max-width: 100%;
  `)}

  ${mq.tablet(css`
    line-height: 1.9;
  `)}

  em {
    font-style: normal;
    font-weight: bold;
    color: var(--text);
  }
`

export const TechCard = styled(CardBase)`
  grid-area: tech;
`

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;

  ${mq.mobile(css`
    grid-template-columns: repeat(3, 1fr);
  `)}

  li {
    ${NeoStyle('4px 4px', '2px', '16px 8px')};
    ${flex('column', 'center', 'center')};
    aspect-ratio: 1 / 1;
    padding: 16px;
    font-size: clamp(0.75rem, 3vw, 0.85rem);
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
    overflow: hidden;

    ${mq.tablet(css`
      padding: 8px;
      border-width: 1px;
    `)}

    svg {
      color: var(--text);
      font-size: 3rem;
      margin-bottom: 8px;
    }
  }
`

export const SoftCard = styled(CardBase)`
  grid-area: soft;
`

export const SoftList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 12px;

  ${mq.tablet(css`
    grid-template-columns: repeat(2, 1fr);
  `)}

  li {
    ${flex('column', 'center', 'center')};
    text-align: center;
    font-size: clamp(0.75rem, 3vw, 1rem);

    svg {
      font-size: clamp(2rem, 6vw, 2.5rem);
    }
  }
`
