import styled, { css } from 'styled-components'
import { flex, mq, NeoStyle } from '../../../styles/mixins'
import * as Base from '../../../styles/base'

export const ProjectsContainer = styled(Base.Section)`
  padding: 40px 15%;

  ${({ theme }) => css`
    @media (max-height: 900px) and (min-width: ${theme.breakpoints.desktop}) {
      padding: 40px 7%;
    }
  `}

  ${mq.tablet(css`
    padding: 60px 40px;
  `)}
`

export const SectionTitle = styled(Base.SectionTitle)`
  ${mq.tablet(css`
    margin-bottom: 3rem;
  `)}
`

export const CarouselWrapper = styled.div`
  position: relative;
  ${flex('row', 'center', 'center')};
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    z-index: 2;
    pointer-events: none;

    ${mq.desktopSm(css`
      display: none;
    `)}
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, var(--primary) 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, var(--primary) 0%, transparent 100%);
  }
`

export const NavButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'left' ? 'left: -76px;' : 'right: -76px;')}
  color: var(--text);
  background-color: transparent;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  z-index: 10;

  ${mq.desktopSm(css`
    display: none;
  `)}

  svg {
    padding: 8px;
    font-size: 4rem;
    border-radius: 50%;
    background-color: var(--secondary);
    border: 1px solid var(--text);
    box-shadow: 3px 3px 0px var(--text);
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-55%) scale(1.1);
    svg {
      box-shadow: 0px 2px 0px var(--text);
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    svg {
      box-shadow: 0px 0px 0px var(--text);
    }
  }
`

export const Carousel = styled.div`
  width: 100%;
  flex: 1;
  ${flex('row', 'space-between', 'flex-start')};
  gap: 100px;
  padding: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  ${mq.desktopSm(css`
    flex-direction: column;
    gap: 60px;
    padding: 0;
    scroll-snap-type: none;
  `)}

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ProjectCard = styled.div`
  ${NeoStyle()};
  min-width: 100%;
  padding: 32px;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'info preview'
    'info feature'
    'info actions';
  gap: 24px;
  scroll-snap-align: center;

  ${mq.desktop(css`
    ${flex('column', 'center', 'stretch')};
  `)}

  ${mq.desktopSm(css`
    gap: 16px;
    padding: 20px;
    ${NeoStyle('0px 4px', '2px')};
  `)}

  ${mq.tablet(css`
    min-width: 100%;
  `)}
`

export const ProjectPreview = styled.img`
  grid-area: preview;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 8px;
`

export const ProjectInfo = styled.div`
  grid-area: info;
  margin-right: 16px;
  text-align: start;
`

export const Title = styled.h3`
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 400;
  line-height: 1;
  margin-bottom: 24px;

  ${mq.tablet(css`
    font-weight: 600;
    margin-bottom: 16px;
  `)}

  ${mq.mobile(css`
    margin-bottom: 14px;
  `)}
`

export const Description = styled(Base.Description)`
  line-height: 2;
  margin-bottom: 8px;

  ${mq.mobile(css`
    line-height: 1.6;
  `)}
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    ${NeoStyle('2px 2px', '2px', '16px 8px', 'var(--secondary)', 'var(--text)')};
    font-size: clamp(0.6rem, 2vw, 0.75rem);
    padding: 6px 16px;
    font-weight: 700;
    width: fit-content;
    white-space: nowrap;

    ${mq.tablet(css`
      padding: 4px 12px;
    `)}
  }
`

export const FeaturesList = styled.ul`
  grid-area: feature;
  ${flex('row', 'center', 'center')};
  gap: 32px;

  ${mq.mobile(css`
    gap: 16px;
  `)}

  li {
    font-size: clamp(0.6rem, 2vw, 0.85rem);
    ${flex('column', 'space-between', 'center')};

    ${mq.tablet(css`
      line-height: 2;
    `)}

    svg {
      font-size: clamp(1.5rem, 5vw, 3rem);
    }
  }
`

export const ProjectActions = styled.div`
  grid-area: actions;

  ul {
    display: flex;
    gap: 16px;

    ${mq.desktopSm(css`
      flex-direction: column;
      gap: 6px;
    `)}

    li {
      ${NeoStyle('4px 4px', '2px', '8px', 'var(--secondary)', 'var(--text)')};
      display: flex;
      height: 48px;
      width: 100%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        box-shadow: 1px 4px 0 var(--text);
        transform: translateY(-5%) scale(1.02);
      }

      ${mq.desktopSm(css`
        height: 36px;
      `)}
    }
  }
`

export const ActionLink = styled(Base.Link)`
  padding: 8px 18px;
  font-size: clamp(0.8rem, 2vw, 1rem);
  ${flex('row', 'space-between', 'center')};
  width: 100%;

  ${mq.desktopSm(css`
    padding: 4px 16px;
  `)}

  svg {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`
