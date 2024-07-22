import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { container, section, siteLink } from 'styles/common.styled'

export const Footer = styled.footer<{ isMainLayout?: boolean }>`
  ${section}

  color: ${({ theme }) => theme.footerTextColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.xs};

  background-color: ${({ theme }) => theme.footerBgColor};

  ${({ isMainLayout }) => isMainLayout && { textAlign: 'center' }}
`

export const LinkFooter = styled(Link)`
  ${siteLink}
`

export const FooterContainer = styled.div<{ isMainLayout?: boolean }>`
  ${container}

  ${({ isMainLayout }) => isMainLayout && { textAlign: 'center' }}
`

// &.main-layout-footer {
//   text-align: center;
// }
