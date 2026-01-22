import { css, type RuleSet } from 'styled-components'

export const mq = {
  tablet: (styles: RuleSet<object>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (styles: RuleSet<object>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  desktopSm: (styles: RuleSet<object>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
      ${styles}
    }
  `,
  desktop: (styles: RuleSet<object>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      ${styles}
    }
  `
}

export const flex = (direction = 'row', justify = 'center', align = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`

export const NeoStyle = (shadow = '8px 8px', border = '3px', radius = '16px') => css`
  background-color: ${({ theme }) => theme.colors.primary};
  border: ${border} solid ${({ theme }) => theme.colors.text};
  box-shadow: ${shadow} 0px ${({ theme }) => theme.colors.text};
  border-radius: ${radius};
`
