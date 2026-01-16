import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 20%;
  min-height: calc(100vh - 90px);
  margin-top: 80px;

  .wrapper-left {
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      align-items: center;
    }
  }

  .wrapper-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: end;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopSmall}) {
    padding: 80px 7%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 32px 40px;
    gap: 20px;
  }
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;
  line-height: 1.1;
  width: fit-content;
  max-width: 458px;

  span {
    color: ${({ theme }) => theme.colors.subtext};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`
export const Description = styled.p`
  margin-top: 8px;
  max-width: 408px;
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 1.25rem;
  letter-spacing: 2%;
  line-height: 1.5;
  text-align: start;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 20px;
    font-size: 1rem;
    margin-left: 0;
  }
`

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 150px;
    height: 150px;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtext};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
`

export const SocialItem = styled.li`
  display: flex;
`

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.subtext};
    transform: translateY(-2px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`
