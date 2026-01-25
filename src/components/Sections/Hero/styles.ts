import styled, { css } from 'styled-components'
import { flex, mq, NeoStyle } from '../../../styles/mixins'
import * as Base from '../../../styles/base'

export const HeroContainer = styled(Base.Section)`
  ${flex('row', 'space-around', 'flex-start')};
  padding: 80px 20% 0;
  min-height: 85vh;

  ${mq.desktop(css`
    min-height: auto;
    justify-content: center;
  `)}

  ${mq.desktopSm(css`
    padding: 80px 7%;
  `)}

  ${mq.tablet(css`
    ${flex('column', 'center', 'center')};
    gap: 20px;
  `)}

  .wrapper-left {
    ${flex('column', 'center', 'start')};
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
  font-weight: 500;
  color: var(--text);
  text-align: start;
  line-height: 1;
  width: fit-content;
  max-width: 458px;

  ${mq.tablet(css`
    text-align: center;
  `)}

  span {
    color: var(--subtext);
  }
`
export const Description = styled(Base.Description)`
  margin-top: 8px;
  max-width: 408px;
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
  ${NeoStyle('2px 2px', '2px', '50%', 'var(--secondary)')};
  width: 250px;
  height: 250px;
  object-fit: cover;

  ${mq.mobile(css`
    width: 150px;
    height: 150px;
  `)}
`

export const Subtitle = styled.h2`
  font-size: clamp(1rem, 4vw, 1.1rem);
  font-weight: 400;
  color: var(--subtext);
  line-height: 1.6;
`

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
`

export const SocialItem = styled(Base.ItemNeo)`
  display: flex;
`

export const SocialLink = styled(Base.Link)`
  ${flex('row', 'center', 'center')};
  padding: 0;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`
