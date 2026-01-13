import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 80px 15%;
  max-width: 1440px;
  margin: 0 auto;

  .wrapper-left {
    display: flex;
    flex-direction: column;
    width: auto;
  }

  .wrapper-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    height: auto;
    padding: 42px 20px;
    gap: 40px;

    .wrapper-right {
      align-items: center;
    }
  }
`

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 150px;
    height: 150px;
  }
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;
  line-height: 1.1;

  span {
    color: ${({ theme }) => theme.colors.subtext};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.75rem;
    text-align: center;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtext};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  margin-top: 8px;
  width: 408px;
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 1.25rem;
  letter-spacing: 2%;
  line-height: 1.5;
  text-align: start;
  margin-left: 8px;
`
