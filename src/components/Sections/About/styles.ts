import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 10%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 20px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: start;
  line-height: 1;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
    text-align: center;
  }
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-areas:
    'bio tech'
    'bio soft';
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-areas:
      'bio'
      'tech'
      'soft';
    grid-template-columns: auto;
    margin-bottom: 16px;
  }
`

export const CardBase = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: start;
  padding: 28px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.text};
  border-radius: 32px 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 8px;
    padding: 28px 0px;
    border: none;
    text-align: center;
    background-color: transparent;
    box-shadow: initial;
  }
`

export const BioCard = styled(CardBase)`
  grid-row: span 2;
  grid-area: bio;
`

export const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.subtext};
  line-height: 2.1;
  max-width: 400px;

  em {
    font-style: normal;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    line-height: 1.9;
  }
`

export const TechCard = styled(CardBase)`
  grid-area: tech;
`

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;

  li {
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    border: 2px solid ${({ theme }) => theme.colors.text};
    box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
    overflow: hidden;
    border-radius: 16px 8px;

    svg {
      color: ${({ theme }) => theme.colors.text};
      font-size: 3rem;
      margin-bottom: 8px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    li {
      padding: 8px;
      font-size: 0.75rem;
      border-width: 1px;
      background-color: ${({ theme }) => theme.colors.primary};

      svg {
        font-size: 3rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const SoftCard = styled(CardBase)`
  grid-area: soft;
`

export const SoftList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 12px;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    svg {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);

    li {
      padding: 0;
      font-size: 0.75rem;

      svg {
        font-size: 2rem;
      }
    }
  }
`
