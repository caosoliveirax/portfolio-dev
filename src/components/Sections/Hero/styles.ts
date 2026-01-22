import styled, { css } from 'styled-components'
import { flex, mq } from '../../../styles/mixins'

export const HeroContainer = styled.section`
  ${flex('row', 'space-around', 'flex-start')};
  padding: 0 20%;
  min-height: calc(100vh - 206px);
  margin-top: 80px;

  ${mq.desktop(css`
    min-height: 100%;
    justify-content: center;
  `)}

  ${mq.desktopSm(css`
    justify-content: center;
    padding: 80px 7%;
  `)}

  ${mq.tablet(css`
    ${flex('column', 'center', 'center')};
    min-height: calc(100vh - 90px);
    padding: 32px 40px;
    gap: 20px;
    margin-top: 0;
  `)}

  .wrapper-left {
    ${flex('column', 'center', 'center')};
    width: auto;

    ${mq.tablet(css`
      align-items: center;
    `)}
  }

  .wrapper-right {
    ${flex('column', 'center', 'center')};
    text-align: end;
    gap: 8px;
  }
`

export const Title = styled.h1`
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-align: start;
  line-height: 1.1;
  width: fit-content;
  max-width: 458px;

  ${mq.tablet(css`
    text-align: center;
  `)}

  span {
    color: ${({ theme }) => theme.colors.subtext};
  }
`
export const Description = styled.p`
  margin-top: 8px;
  max-width: 408px;
  color: ${({ theme }) => theme.colors.subtext};
  font-size: clamp(1rem, 4vw, 1.25rem);
  letter-spacing: 2%;
  line-height: 1.5;
  text-align: start;
  margin-left: 8px;

  ${mq.tablet(css`
    text-align: center;
  `)}

  ${mq.mobile(css`
    margin-top: 20px;
    margin-left: 0;
  `)}
`

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  ${mq.mobile(css`
    width: 150px;
    height: 150px;
  `)}
`

export const Subtitle = styled.h2`
  font-size: clamp(1rem, 4vw, 1.1rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.subtext};
  line-height: 1.6;
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
  ${flex('row', 'center', 'center')};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.subtext};
    transform: translateY(-2px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`
