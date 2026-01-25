import styled, { css } from 'styled-components'
import { flex, mq } from '../../../styles/mixins'
import * as Base from '../../../styles/base'

export const ContactsContainer = styled(Base.Section)`
  overflow: hidden;
  justify-content: center;

  ${mq.tablet(css`
    padding: 24px;
  `)}
`

export const SectionTitle = styled(Base.SectionTitle)`
  font-size: clamp(1.75rem, 6vw, 3rem);
  line-height: 1.5;
  width: 80%;
  margin-bottom: 24px;

  ${mq.tablet(css`
    line-height: 1;
    width: auto;
    margin-bottom: 16px;
  `)}
`

export const ContactCard = styled(Base.Card)`
  ${flex('column', 'center', 'center')};
  width: 100%;
  max-width: 600px;
  z-index: 1;
  padding: 48px;

  ${mq.tablet(css`
    padding: 24px;
    width: 100%;
  `)}
`

export const Text = styled(Base.Description)`
  line-height: 1.5;
  width: 80%;
  text-align: center;
  font-weight: 500;
  margin-bottom: 24px;
`

export const LinksGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  li:first-child {
    grid-column: span 3;
  }

  ${mq.tablet(css`
    grid-template-columns: 1fr 1fr;
    li:first-child {
      grid-column: span 1;
      a {
        flex-direction: column;
      }
    }
  `)}
`
export const LinkItem = styled(Base.ItemNeo)`
  ${flex('row', 'center', 'center')};
  padding: 20px;
`

export const ContactLink = styled(Base.Link)`
  ${flex('column', 'center', 'center')};
  font-size: clamp(1rem, 4vw, 1.25rem);

  svg {
    font-size: clamp(3rem, 4vw, 4rem);
  }
`

export const InfoBar = styled.div`
  ${flex('row', 'center', 'center')};
  gap: 24px;
  width: 100%;
  margin-top: 32px;
  padding: 8px;
  border-top: 3px solid var(--text);

  span {
    font-size: clamp(0.85rem, 3vw, 1.15rem);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      font-size: clamp(1rem, 3vw, 1.5rem);
    }
  }
`
