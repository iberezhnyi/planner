import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { container, section, siteLink } from 'styles/common.styled'

export const Footer = styled.footer<{ $isMainLayout?: boolean }>`
  ${section}

  color: ${({ theme }) => theme.footerTextColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.xs};

  background-color: ${({ $isMainLayout, theme }) =>
    $isMainLayout ? theme.primaryBgColor : theme.footerBgColor};
`

export const LinkFooter = styled(Link)`
  ${siteLink}
`

export const FooterContainer = styled.div<{ $isMainLayout?: boolean }>`
  ${container}

  text-align: ${({ $isMainLayout }) => $isMainLayout && 'center'};
`

// ${({ isMainLayout, theme }) =>
//   isMainLayout
//     ? { backgroundColor: theme.footerBgColor }
//     : theme.primaryBgColor
// }

// &.main-layout-footer {
//   text-align: center;
// }
