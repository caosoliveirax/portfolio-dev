import styled, { css } from 'styled-components'

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 40px 15% 72px 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    @media (max-height: 900px) and (min-width: ${theme.breakpoints.desktop}) {
      padding: 40px 7%;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 20px;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

    @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}) {
      display: none;
    }
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 100%
    );
  }
`

export const NavButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'left' ? 'left: -76px;' : 'right: -76px;')}
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}) {
    display: none;
  }

  svg {
    padding: 8px;
    font-size: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.text};
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.text};
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-55%) scale(1.1);
    svg {
      box-shadow: 0px 2px 0px ${({ theme }) => theme.colors.text};
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    svg {
      box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.text};
    }
  }
`

export const Carousel = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 100px;
  padding: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}) {
    flex-direction: column;
    gap: 60px;
    padding: 0;
    scroll-snap-type: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.text};
  border-radius: 16px;
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
  box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}) {
    gap: 16px;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.text};
    box-shadow: 0px 4px 0px ${({ theme }) => theme.colors.text};
  }
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
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
    margin-bottom: 14px;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    line-height: 1.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    padding: 6px 16px;
    font-weight: 700;
    border-radius: 16px 8px;

    width: fit-content;
    white-space: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    li {
      font-size: 0.65rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    li {
      padding: 4px 12px;
      font-size: 0.6rem;
    }
  }
`

export const FeaturesList = styled.ul`
  grid-area: feature;
  display: flex;
  justify-content: center;
  gap: 32px;

  li {
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 3rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    li {
      font-size: 0.75rem;
      line-height: 2;

      svg {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 16px;

    li {
      font-size: 0.6rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`

export const ProjectActions = styled.div`
  grid-area: actions;

  ul {
    display: flex;
    gap: 16px;

    li {
      background-color: ${({ theme }) => theme.colors.text};
      display: flex;
      height: 48px;
      width: 100%;
      border-radius: 8px;

      a {
        padding: 8px 18px;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}) {
    ul {
      flex-direction: column;
      gap: 6px;
      li {
        height: 36px;
        a {
          font-size: 0.7rem;
          padding: 4px 16px;

          svg {
            font-size: 1rem;
          }
        }
      }
    }
  }
`
