import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 20px;
`

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }
`

export const Title = styled.h1`
  font-size: 7.5rem;
  line-height: 1.2;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.subtext};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.75rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtext};
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`
