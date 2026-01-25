import styled from 'styled-components'
import { flex } from '../../../styles/mixins'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  ${flex('column', 'center', 'center')};
  gap: 16px;
  position: relative;
`

export const Copy = styled.p`
  font-family: monospace;
  background-color: var(--primary);
  font-size: clamp(0.85rem, 3vw, 1rem);
  padding: 4px 8px;
  border: 1px solid var(--text);
  opacity: 0.7;
`
